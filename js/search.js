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

function displayPropertyList(property) {
	console.log("Property: "+property.name);
}

function createPropertyElement(area) {
	var selection = document.getElementById(area);

	// 1. If an area has been set before, hide it
	if (typeof setArea.camelCaseName !== "undefined") {
		// An area was previously selected, we need to hide it now
		var previousSelection = document.getElementById(setArea.camelCaseName);

		// Did the last selection have a list of cities? If so we need to hide it. If not, hide the div containing cities
		if (previousSelection !== null) {
			document.getElementById(setArea.camelCaseName).style.display = "none";
		} else {
			document.getElementById("citySelector").style.display = "none";
		}
		document.getElementById("area"+setArea.camelCaseName).style.display = "none";
		//console.log(document.getElementById("area"+setArea.camelCaseName));
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
	document.getElementById("area"+area).style.display = "inline-block";
	//toggleCityContainer(area);

	// Now let's set the area based on the current click
	setArea.camelCaseName = area;

	// Currently fixed to show all from Chandler, AZ
	//data.states[0].areas[0].properties.forEach(quickPrint);
}

function createPropertyElement2(property) {
	var propertyTemp = document.createElement("div");
	propertyTemp.setAttribute("id", property.name.camelCase());
	propertyTemp.appendChild(document.createTextNode(property.name));
	this.appendChild(propertyTemp);
}

function quickPrint(property) {
	console.log("property: "+property.name);
}

function createCityElement(city) {
	//console.log("--"+city.name);
	var cityTemp = document.createElement("div");
	cityTemp.setAttribute("class", "cityOption");

	cityTemp.appendChild(document.createTextNode(city.name));

	this.appendChild(cityTemp);
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
		cityContainer.setAttribute("id", area.name.camelCase());
		cityContainer.setAttribute("class", "cityContainer");
		cityDiv.appendChild(cityContainer);
		// Loop through all cities in this area (if any), passing along the cityContainer element
		area.cities.forEach(createCityElement, cityContainer);

		/*
		if (typeof area.properties !== "undefined") {
			// Loop through all properties in this area and stuff them into the existing propertyList div
			area.properties.forEach(displayPropertyList);
		}
		*/
	}

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
