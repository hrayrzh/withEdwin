Promise.all([
  fetch("https://covid19-data.p.rapidapi.com/geojson-ww", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid19-data.p.rapidapi.com",
      "x-rapidapi-key": "d77e8847acmsh25461c1afc9eabcp16df5fjsn137f667217bb"
    }
  }),
  fetch("https://restcountries.eu/rest/v2/all")
])
  .then(async ([cv19, wrld]) => {
    const covCountries = await cv19.json();
    const worldData = await wrld.json();
    let covCountryFeatures = covCountries.features;

    console.log(covCountryFeatures);
    for (let i = 0; i < covCountryFeatures.length; i++) {
      let div = document.createElement("div");
      let nameFromCovid = covCountryFeatures[i].properties.name;
			console.log(nameFromCovid);
      let country = check(nameFromCovid);
			console.log(country);
      let countryData = worldData.filter(data => data.name === country);
			
			let name = countryData[0].name;
      let population = countryData[0].population;
      let confirmed = covCountryFeatures[i].properties.confirmed;
      let deaths = covCountryFeatures[i].properties.deaths;
      let active = covCountryFeatures[i].properties.active;
      let recovered = covCountryFeatures[i].properties.recovered;
			
      div.innerHTML += `<img src = "${countryData[0].flag}">`;
      div.innerHTML += `<button>${nameFromCovid}</button> `;

      document.getElementById("app").appendChild(div);

      let btn = document.getElementsByTagName("button")[i];

      btn.addEventListener("click", () => {
        if (country.length && confirmed > 0) {
          createPopUp(name,population,confirmed,deaths,active,recovered);
					console.log(name);
					console.log(country);
					console.log(nameFromCovid);
        } else {
					console.log(name);
					console.log(country);
					console.log(nameFromCovid);
          createPopUpNoData(nameFromCovid);
        }
      });
    }
  })
  .catch(err => {
    console.log(err);
  });

