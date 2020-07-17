class Country{
	constructor({name, population}){
		this.name = name;
		this.population = population;
	}
}

class Covid{
	constructor({confirmed, deaths, active, recovered, name}){
		this.name = name;
		this.confirmed = confirmed;
		this.deaths = deaths;
		this.active = active;
		this.recovered = recovered;
	}
}