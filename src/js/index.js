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
			const dataCov = new Covid(covCountryFeatures[i].properties);
			
			
			
      let nameFromCovid = dataCov.name;
			
//			console.log(nameFromCovid);
      let country = check(nameFromCovid);
//			console.log(country);
      let countryData = worldData.filter(data => data.name === country);
			
			const dataCntr = new Country(countryData[0]);
			
			
		
			
			let name = dataCntr.name;
      let population = dataCntr.population;
      let confirmed = dataCov.confirmed;
      let deaths = dataCov.deaths;
      let active = dataCov.active;
      let recovered = dataCov.recovered;
			
      div.innerHTML += `<img src = "${countryData[0].flag}">`;
      div.innerHTML += `<button>${nameFromCovid}</button> `;

      document.getElementById("app").appendChild(div);

      let btn = document.getElementsByTagName("button")[i];

      btn.addEventListener("click", () => {
        if (country.length && active > 0) {
          createPopUp(name,population,confirmed,deaths,active,recovered);
        } else {
					console.log(dataCov);
          createPopUpNoData(nameFromCovid);
        }
      });
    }
  })
  .catch(err => {
    console.log(err);
  });

