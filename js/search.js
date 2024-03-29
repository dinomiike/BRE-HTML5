/* 
	Perhaps this object could be extended to contain a subset of data from the main json file which also contains property info.
	That would allow you to filter through it faster than sorting out the entire blob with forEach from the web service response.
	It could be an array assigned to the contents of a property and a new method might be a good way of traversing that.
*/

// Global object for city toggle list
function controlArea(area) {
	this.camelCaseName = area;
}
var setArea = new controlArea();

function test(areaName) {
	confirm("You have selected "+areaName.camelCase());
}

/*
	May not need to componentize this function, but keep the outline of it here for ideas
	* * *
function toggleCityContainer(area) {
	if (typeof setArea.camelCaseName !== "undefined") {
		// An area was previously selected, we need to hide it now
		document.getElementById(setArea.camelCaseName).style.display = "none";
	}
	
	// Now let's set the area based on the current click
	setArea.camelCaseName = area;
	// And make it's container visible
	selection.style.display = "inline-block";
}
*/

function toggleCityDisplay(city) {
	var toggle = document.getElementById("city"+city);
	var cityItem = document.getElementById("cityItem"+city);

	toggle.style.display = (toggle.style.display == "none") ? "" : "none";
	cityItem.className = (cityItem.className == "cityOption") ? "cityOptionOff" : "cityOption";
}

function displayPropertyList(property) {
	console.log("Property: "+property.name);
}

function createPropertyElement(area) {
	var selection = document.getElementById("cityList"+area);

	// 1. If an area has been set before, hide it
	if (typeof setArea.camelCaseName !== "undefined") {
		// An area was previously selected, we need to hide it now
		var previousSelection = document.getElementById("cityList"+setArea.camelCaseName);

		// Did the last selection have a list of cities? If so we need to hide it too. If not, hide the div containing cities
			if (previousSelection !== null) {
				document.getElementById("cityList"+setArea.camelCaseName).style.display = "none";
			} else {
				document.getElementById("citySelector").style.display = "none";
			}

		document.getElementById(setArea.camelCaseName).style.display = "none";
	}

	// 2. Find out if the current clicked area has cities to show
	// If this area has cities to expand, allow the container to appear: it will return null if not found
	if (selection !== null) {
		// Make the city container div visible
		document.getElementById("citySelector").style.display = "inline-block";

		// Now make the list of cities for that area visible
		selection.style.display = "inline-block";
	} else {
		//console.log("Area with no cities, show all properties");
		document.getElementById("citySelector").style.display = "none";
	}

	// Make the property div visible
	document.getElementById("propertySelector").style.display = "inline-block";
	document.getElementById(area).style.display = "inline-block";

	// Now let's set the area based on the current click
	setArea.camelCaseName = area;
}

function createPropertyElement2(property) {
	var propertyTemp = document.createElement("div");
	propertyTemp.setAttribute("id", property.name.camelCase());
	propertyTemp.setAttribute("class", "property");
	//propertyTemp.appendChild(document.createTextNode(property.name));

	// Create image div
	var imgBox = document.createElement("div");
	var imgTmp = document.createElement("img");
	imgBox.setAttribute("class", "img");
	imgTmp.setAttribute("src", "../photoAssets/thumbnails/thumb_"+property.propertyCode+".jpg");
	imgTmp.setAttribute("class", "propertyPhoto");
	imgBox.appendChild(imgTmp);
	propertyTemp.appendChild(imgBox);

	// Create property info div
	var infoBox = document.createElement("div");
	var infoTitle = document.createElement("div");
	var infoAddress = document.createElement("div");
	var infoRegion = document.createElement("div");
	var infoPhone = document.createElement("div");
	infoBox.setAttribute("class", "info");
	infoTitle.setAttribute("class", "title");
	infoTitle.appendChild(document.createTextNode(property.name));
	infoAddress.setAttribute("class", "address");
	infoAddress.appendChild(document.createTextNode(property.streetAddress));
	infoRegion.setAttribute("class", "cityStateZip");
	infoRegion.appendChild(document.createTextNode(property.city+", "+property.state+" "+property.zip));
	infoPhone.setAttribute("class", "phone");
	infoPhone.appendChild(document.createTextNode(property.phoneNumber));
	infoBox.appendChild(infoTitle);
	infoBox.appendChild(infoAddress);
	infoBox.appendChild(infoRegion);
	infoBox.appendChild(infoPhone);
	propertyTemp.appendChild(infoBox);

	// Create range div
	var rangeBox = document.createElement("div");
	var rangeDesc = document.createElement("div");
	var rangeFeatures = document.createElement("div");
	rangeBox.setAttribute("class", "range");
	rangeDesc.setAttribute("class", "desc");
	rangeDesc.appendChild(document.createTextNode("1-3 Bedrooms starting at "+property.rentMin));
	rangeFeatures.appendChild(document.createTextNode("Pet friendly"));
	rangeBox.appendChild(rangeDesc);
	rangeBox.appendChild(rangeFeatures);
	propertyTemp.appendChild(rangeBox);

	this.appendChild(propertyTemp);
}

function quickPrint(property) {
	console.log("property: "+property.name);
}

function propertyDiv(property) {
	/*console.log(property.name);
	var propertyContainer = document.createElement("div");
	var propertyDiv = document.getElementById("propertyList");
	propertyContainer.setAttribute("id", "area");*/
	console.log(property.parent);
}

function createCityElement(city) {
	//console.log("--"+city.name);
	var cityTemp = document.createElement("div");
	cityTemp.setAttribute("id", "cityItem"+city.name.camelCase());
	cityTemp.setAttribute("class", "cityOption");
	cityTemp.setAttribute("onclick", "toggleCityDisplay(\""+city.name.camelCase()+"\")");

	cityTemp.appendChild(document.createTextNode(city.name));

	this.appendChild(cityTemp);

	/*if (typeof city.properties !== "undefined") {
		//city.properties.forEach(propertyDiv);
		//console.log(JSON.stringify(city));
		console.log(this+": "+city.name);
	}*/
}

function createAreaElement(area) {
	//console.log("-"+area.name);
	var areaTemp = document.createElement("div");
	var maindiv = document.getElementById("areaSelector");

	areaTemp.setAttribute("onclick", "createPropertyElement('"+area.name.camelCase()+"')");

	areaTemp.appendChild(document.createTextNode(area.name));

	maindiv.appendChild(areaTemp);
	// If the area has cities, let's build a list of them (for filtering)
	if (typeof area.cities !== "undefined") {
		var cityContainer = document.createElement("div");
		var cityDiv = document.getElementById("citySelector");
		cityContainer.setAttribute("id", "cityList"+area.name.camelCase());
		cityContainer.setAttribute("class", "cityContainer");
		cityDiv.appendChild(cityContainer);
		// Loop through all cities in this area (if any), passing along the cityContainer element
		area.cities.forEach(createCityElement, cityContainer);
		//area.cities.forEach(createCityElement, area.name);
	}

	/*
	 *** THIS IS ANTIQUATED. A NEW METHOD IS IN ORDER ***
	// If the area has properties, let's build a list of them
	if (typeof area.properties !== "undefined") {
		// Create a container div for this property and give it an ID
		var propertyContainer = document.createElement("div");
		var propertyDiv = document.getElementById("propertyList");
		propertyContainer.setAttribute("id", "area"+area.name.camelCase());
		propertyContainer.setAttribute("class", "areaList");
		propertyDiv.appendChild(propertyContainer);

		area.properties.forEach(createPropertyElement2, propertyContainer);
	}
	*/
	

	var areaListContainer = document.getElementById("propertyList");

	// 1. Build the area div
	var areaContainer = document.createElement("div");
	areaContainer.setAttribute("id", area.name.camelCase());
	areaContainer.setAttribute("class", "areaList");
	areaListContainer.appendChild(areaContainer);

	// 2. If there are cities, build the city divs
	if (typeof area.cities !== "undefined") {
		area.cities.forEach(function(city) {
			var cityContainer = document.createElement("div");
			cityContainer.setAttribute("id", "city"+city.name.camelCase());
			cityContainer.setAttribute("class", "cityList");

			this.appendChild(cityContainer);

			// 3. If there are properties, build the property divs
			if (typeof city.properties !== "undefined") {
				/*city.properties.forEach(function(property) {
					var propertyContainer = document.createElement("div");
					propertyContainer.setAttribute("id", property.name.camelCase());
					propertyContainer.setAttribute("class", "property");
					propertyContainer.appendChild(document.createTextNode(property.name));

					this.appendChild(propertyContainer);
				}, cityContainer);*/
				city.properties.forEach(createPropertyElement2, cityContainer);
			}
		}, areaContainer);
	}
	
	// 4. This is an area that has no cities, the properties are direct children of the area
	if (typeof area.properties !== "undefined") {
		/*area.properties.forEach(function(property) {
			var propertyContainer = document.createElement("div");
			propertyContainer.setAttribute("id", property.name.camelCase());
			propertyContainer.setAttribute("class", "property");
			propertyContainer.appendChild(document.createTextNode(property.name));

			this.appendChild(propertyContainer);
		}, areaContainer);*/
		area.properties.forEach(createPropertyElement2, areaContainer);
	}

	/*
	***************************
		This needs to be moved to the createPropertyElement function.
		Find a way to loop through all cities given the name of an area
	***************************
	if (typeof area.properties !== "undefined") {
		// Loop through all properties in this area and stuff them into the existing propertyList div
		area.properties.forEach(displayPropertyList);
	}*/
}

function createStateElement(state) {
	//console.log(state.name);
	var temp = document.createElement("h2");
	var maindiv = document.getElementById("areaSelector");

	temp.appendChild(document.createTextNode(state.name));

	maindiv.appendChild(temp);
	state.areas.forEach(createAreaElement);
}

function showLocationGrid() {
	// The variable data contains all the regional data
	data.states.forEach(createStateElement);
}

window.onload=function() {
	showLocationGrid();
};
