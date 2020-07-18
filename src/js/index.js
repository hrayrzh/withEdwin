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
		let CovContry = new MyIterator(covCountries.features);
	
		while(CovContry.hasNext()){
			let div = document.createElement("div");
			let countryinfo = CovContry.next().properties;
      let country = check(countryinfo.name);
			let countryData = worldData.filter(data => data.name === country);
			
			div.innerHTML += `<img src = "${countryData[0].flag}">`;
      div.innerHTML += `<button name=${countryinfo.name}>${countryinfo.name}</button> `;
      document.getElementById("app").appendChild(div);
      let btn = document.getElementsByTagName("button")[CovContry.i-1];
			
			btn.addEventListener("click", () => {
        if (country.length && countryinfo.recovered > 0) {
					console.log(countryinfo);
         createPopUp(countryData[0].name, countryData[0].population, countryinfo.confirmed, countryinfo.deaths, countryinfo.active, countryinfo.recovered);
        } else {
          createPopUpNoData(countryinfo.name);
        }
      });
		}
  })
  .catch(err => {
    console.log(err);
  });

