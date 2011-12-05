function test(areaName) {
	confirm("You have selected "+areaName);
}

function createPropertyElement(area) {
	var selection = data;
	alert(data);
}

function createCityElement(city) {
	console.log("--"+city.name);
	var cityTemp = document.createElement("div");
	var maindiv = document.getElementById("areaSelector");
	cityTemp.setAttribute("class", "cityOption");

	cityTemp.appendChild(document.createTextNode(city.name));

	maindiv.appendChild(cityTemp);
}

function createAreaElement(area) {
	console.log("-"+area.name);
	var areaTemp = document.createElement("div");
	var maindiv = document.getElementById("areaSelector");
	areaTemp.setAttribute("onclick", "createPropertyElement('"+area.name+"')");

	areaTemp.appendChild(document.createTextNode(area.name));

	maindiv.appendChild(areaTemp);
	/*
	Uncomment this to invoke forEach on cities witin an area.
	The condition is necessary because all area objects don't contain city properties
	if (typeof area.cities !== "undefined") {
		area.cities.forEach(createCityElement);
	}
	*/
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
						"name": "Chandler",
						"properties": [
							{
								"name": "Pinnacle Queen Creek",
								"streetAddress": "800 West Queen Creek Road",
								"city": "Chandler",
								"state": "AZ",
								"zip": "85248",
								"phoneNumber": "866.553.0652",
								"rentMin": "760",
								"rentMax": "1220",
								"bedsMin": "1",
								"bedsMax": "3",
								"bathsMin": "1",
								"bathsMax": "2",
								"amenities": [
									{
										"name": "Fitness center"
									},
									{
										"name": "Controlled access"
									},
									{
										"name": "Pet friendly"
									},
									{
										"name": "Pool"
									},
									{
										"name": "Covered parking"
									},
									{
										"name": "Playground"
									}
								]
							},
							{
								"name": "Pinnacle Terrace",
								"streetAddress": "801 North Federal Street",
								"city": "Chandler",
								"state": "AZ",
								"zip": "85226",
								"phoneNumber": "866.551.7640",
								"rentMin": "745",
								"rentMax": "1350",
								"bedsMin": "1",
								"bedsMax": "3",
								"bathsMin": "1",
								"bathsMax": "2",
								"amenities": [
									{
										"name": "Controlled access"
									},
									{
										"name": "Fitness center"
									},
									{
										"name": "Pet friendly"
									},
									{
										"name": "Covered parking"
									},
									{
										"name": "Pool"
									}
								]
							}
						]
					},
					{
						"name": "Phoenix",
						"properties": [
							{
								"name": "Pinnacle at South Mountain",
								"streetAddress": "5151 East Guadalupe Road",
								"city": "Phoenix",
								"state": "AZ",
								"zip": "85044",
								"phoneNumber": "866.926.9783",
								"rentMin": "685",
								"rentMax": "1335",
								"bedsMin": "1",
								"bedsMax": "3",
								"bathsMin": "1",
								"bathsMax": "2",
								"amenities": [
									{
										"name": "Fitness center"
									},
									{
										"name": "Controlled access"
									},
									{
										"name": "Pool"
									},
									{
										"name": "Pet friendly"
									},
									{
										"name": "Playground"
									},
									{
										"name": "Covered parking"
									}
								]
							},
							{
								"name": "Pinnacle Towne Center",
								"streetAddress": "1601 East Highland Avenue",
								"city": "Phoenix",
								"state": "AZ",
								"zip": "85016",
								"phoneNumber": "866.551.0671",
								"rentMin": "800",
								"rentMax": "1530",
								"bedsMin": "1",
								"bedsMax": "3",
								"bathsMin": "1",
								"bathsMax": "2",
								"amenities": [
									{
										"name": "Fitness center"
									},
									{
										"name": "Controlled access"
									},
									{
										"name": "Covered parking"
									},
									{
										"name": "Pet friendly"
									},
									{
										"name": "Pool"
									}
								]
							},
							{
								"name": "Pinnacle at Union Hills",
								"streetAddress": "4750 East Union Hills",
								"city": "Phoenix",
								"state": "AZ",
								"zip": "85050",
								"phoneNumber": "866.666.4209",
								"rentMin": "755",
								"rentMax": "1275",
								"bedsMin": "1",
								"bedsMax": "3",
								"bathsMin": "1",
								"bathsMax": "2",
								"amenities": [
									{
										"name": "Controlled access"
									},
									{
										"name": "Fitness center"
									},
									{
										"name": "Pet friendly"
									},
									{
										"name": "Playground"
									},
									{
										"name": "Pool"
									},
									{
										"name": "Covered parking"
									}
								]
							},
							{
								"name": "Arcadia Cove",
								"streetAddress": "2252 North 44th Street",
								"city": "Phoenix",
								"state": "AZ",
								"zip": "85008",
								"phoneNumber": "866.797.6001",
								"rentMin": "610",
								"rentMax": "1050",
								"bedsMin": "1",
								"bedsMax": "3",
								"bathsMin": "1",
								"bathsMax": "2",
								"amenities": [
									{
										"name": "Fitness center"
									},
									{
										"name": "Controlled access"
									},
									{
										"name": "Pet friendly"
									},
									{
										"name": "Covered parking"
									},
									{
										"name": "Pool"
									}
								]
							}
						]
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
