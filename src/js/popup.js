	let createTable = document.createElement("table");
	createTable.setAttribute("id", "ttt");
	document.getElementById("table").appendChild(createTable);

function createPopUp(country, population, confirmed, deaths, active, recovered) {
	document.getElementById("h2").innerHTML = `<h1>${country}</h1>`;
  document.getElementById("ttt").innerHTML = `<tr><td>populaton</td><td>${population}</td></tr><tr><td>confirmed</td><td>${confirmed}</td></tr><tr><td>deats</td><td>${deaths}</td></tr><tr><td>active</td><td>${active}</td></tr><tr><td>recovered</td><td>${recovered}</td></tr>`;
	document.getElementById("here").style.display = "block";
}

function createPopUpNoData(country) {
	document.getElementById("h2").innerHTML = `<h1>${country}</h1>`;
  document.getElementById("ttt").innerHTML = `no data`;
	document.getElementById("here").style.display = "block";
}

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("here").style.display = "none";
});