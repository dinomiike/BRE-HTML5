function test(areaName) {
	confirm("You have selected "+areaName);
}

function createCityElement(city) {
	console.log("--"+city.name);
}

function createAreaElement(area) {
	console.log("-"+area.name);
	var areaTemp = document.createElement("div");
	var maindiv = document.getElementById("areaSelector");
	areaTemp.setAttribute("onclick", "createCityElement('"+area.name+"')");

	areaTemp.appendChild(document.createTextNode(area.name));

	maindiv.appendChild(areaTemp);
	/*
	Uncomment this to invoke forEach on cities witin an area.
	The condition is necessary because all area objects don't contain city properties
	*/
	if (typeof area.cities !== "undefined") {
		area.cities.forEach(createCityElement);
	}
}

function createStateElement(state) {
	console.log(state.name);
	var temp = document.createElement("h2");
	var maindiv = document.getElementById("areaSelector");

	temp.appendChild(document.createTextNode(state.name));

	maindiv.appendChild(temp);
	state.areas.forEach(createAreaElement);
}

function showLocationGrid() {
	// Object containing the regional data
	var data = {
		"states": [
			{
				"name": "Arizona",
				"areas": [
					{
						"name": "Chandler"
					},
					{
						"name": "Phoenix"
					}
				]
			},
			{
				"name": "California",
				"areas": [
					{
						"name": "Inland Empire",
						"cities": [
							{
								"name": "Chino"
							},
							{
								"name": "Chino Hills"
							},
							{
								"name": "Diamond Bar"
							},
							{
								"name": "Riverside"
							}
						]
					},
					{
						"name": "Los Angeles County",
						"cities": [
							{
								"name": "Los Angeles"
							},
							{
								"name": "Marina del Rey"
							},
							{
								"name": "Northridge"
							},
							{
								"name": "Pasadena"
							},
							{
								"name": "Santa Clarita"
							},
							{
								"name": "Valencia"
							},
							{
								"name": "Wilmington"
							}
						]
					},
					{
						"name": "Orange County",
						"cities": [
							{
								"name": "Anaheim"
							},
							{
								"name": "Costa Mesa"
							},
							{
								"name": "Fountain Valley"
							},
							{
								"name": "Fullerton"
							},
							{
								"name": "La Habra"
							},
							{
								"name": "Laguna Nigel"
							},
							{
								"name": "Orange"
							},
							{
								"name": "Rancho Santa Margarita"
							},
							{
								"name": "San Clemente"
							},
							{
								"name": "Santa Ana"
							},
							{
								"name": "South Coast Metro"
							}
						]
					},
					{
						"name": "San Francisco Bay Area",
						"cities": [
							{
								"name": "Emeryville"
							},
							{
								"name": "Foster City"
							},
							{
								"name": "Fremont"
							},
							{
								"name": "Hayward"
							},
							{
								"name": "Lafayette"
							},
							{
								"name": "Menlo Park"
							},
							{
								"name": "Oakland"
							},
							{
								"name": "San Jose"
							},
							{
								"name": "San Mateo"
							},
							{
								"name": "San Rafael"
							},
							{
								"name": "San Ramon"
							},
							{
								"name": "Santa Clara"
							},
							{
								"name": "Union City"
							}
						]
					},
					{
						"name": "Sacramento Area",
						"cities": [
							{
								"name": "Roseville"
							},
							{
								"name": "Sacramento"
							}
						]
					},
					{
						"name": "San Diego Area",
						"cities": [
							{
								"name": "Chula Vista"
							},
							{
								"name": "El Cajon"
							},
							{
								"name": "San Diego"
							},
							{
								"name": "Spring Valley"
							}
						]
					}
				]
			},
			{
				"name": "Colorado",
				"areas": [
					{
						"name": "Denver Area",
						"cities": [
							{
								"name": "Centennial"
							},
							{
								"name": "Greenwood Village"
							},
							{
								"name": "Highlands Ranch"
							},
							{
								"name": "Littleton"
							},
							{
								"name": "Thornton"
							},
							{
								"name": "Westminster"
							}
						]
					}
				]
			},
			{
				"name": "Washington",
				"areas": [
					{
						"name": "Seattle Area",
						"cities": [
							{
								"name": "Bellevue"
							},
							{
								"name": "Bothell"
							},
							{
								"name": "Mill Creek"
							},
							{
								"name": "Redmond"
							},
							{
								"name": "Renton"
							},
							{
								"name": "Seattle"
							},
							{
								"name": "Shoreline"
							}
						]
					}
				]
			}
		]
	};

	data.states.forEach(createStateElement);
}

window.onload=function() {
showLocationGrid();
};
