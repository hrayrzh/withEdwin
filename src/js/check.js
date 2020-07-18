function check(name) {
  let x = name;

  if (x === "Bolivia") {
    x = "Bolivia (Plurinational State of)";
  } else if (x==="Falkland Is.") {
    x = "Falkland Islands (Malvinas)";
  } else if (x==="Venezuela") {
    x = "Venezuela (Bolivarian Republic of)";
  } else if (x==="Brunei") {
    x = "Brunei Darussalam";
  } else if (x==="N. Cyprus") {
    x = "Cyprus";
  } else if (x==="Iran") {
    x = "Iran (Islamic Republic of)";
	} else if (x === "Sudan") {
		x == "Sudan";
  } else if (x === "S. Sudan") {
    x = "South Sudan";
  } else if (x === "Dem. Rep. Korea") {
    x = "Korea (Democratic People's Republic of)";
	} else if (x === "Korea") {
    x = "Korea (Republic of)";
	} else if (x === "Lao PDR") {
    x = "Lao People's Democratic Republic";
	} else if (x === "Palestine") {
    x = "Palestine, State of";
	} else if (x === "Syria") {
    x = "Syrian Arab Republic";
	} else if (x === "Central African Rep.") {
    x = "Central African Republic";
  } else if (x==="Dem. Rep. Congo") {
    x = "Congo (Democratic Republic of the)";
  } else if (x==="W. Sahara") {
    x = "Western Sahara";
  } else if (x==="Tanzania") {
    x = "Tanzania, United Republic of";
  } else if (x==="Solomon Is.") {
    x = "Solomon Islands";
  } else if (x==="Bosnia and Herz.") {
    x = "Bosnia and Herzegovina";
  } else if (x==="Czech Rep.") {
    x = "Czech Republic";
  } else if (x==="United Kingdom") {
    x = "United Kingdom of Great Britain and Northern Ireland";
  } else if (x==="Kosovo") {
    x = "Republic of Kosovo";
  } else if (x==="Moldova") {
    x = "Moldova (Republic of)";
  } else if (x==="Macedonia") {
    x = "Macedonia (the former Yugoslav Republic of)";
  } else if (x==="Russia") {
    x = "Russian Federation";
  } else if (x==="Dominican Rep.") {
    x = "Dominican Republic";
  } else if (x==="United States") {
    x = "United States of America";
  } else if (x === "Vietnam") {
    x = "Viet Nam";
  } else if (x === "Eq. Guinea") {
    x = "Equatorial Guinea";
		
  } else if (x==="Somaliland") {
    x = "Somalia";
  }
  return x;
}