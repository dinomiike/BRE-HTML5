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

function createPropertyElement(area) {
	// Make the city container and property container divs visible
	document.getElementById("citySelector").style.display = "inline-block";
	document.getElementById("propertySelector").style.display = "inline-block";

	var selection = document.getElementById(area);

	// A city has either been set or needs to be set now, so let's set it
	//setArea.camelCaseName = area;

	if (typeof setArea.camelCaseName !== "undefined") {
		// Hide the existing area
		document.getElementById(setArea.camelCaseName).style.display = "none";
	}
	selection.style.display = "inline-block";
	// A city has either been set or needs to be set now, so let's set it
	setArea.camelCaseName = area;
}

function createCityElement(city) {
	console.log("--"+city.name);
	var cityTemp = document.createElement("div");
	cityTemp.setAttribute("class", "cityOption");

	cityTemp.appendChild(document.createTextNode(city.name));

	//cityContainer.appendChild(cityTemp);
	this.appendChild(cityTemp);

	//maindiv.appendChild(cityContainer);
}

function createAreaElement(area) {
	console.log("-"+area.name);
	var areaTemp = document.createElement("div");
	var maindiv = document.getElementById("areaSelector");

	/*var cityContainer = document.createElement("div");
	var cityDiv = document.getElementById("citySelector");
	cityContainer.setAttribute("id", area.name.camelCase());
	cityDiv.appendChild(cityContainer);*/

	areaTemp.setAttribute("onclick", "createPropertyElement('"+area.name.camelCase()+"')");

	areaTemp.appendChild(document.createTextNode(area.name));

	maindiv.appendChild(areaTemp);
	/*
	Uncomment this to invoke forEach on cities witin an area.
	The condition is necessary because all area objects don't contain city properties
	*/
	if (typeof area.cities !== "undefined") {
		var cityContainer = document.createElement("div");
		var cityDiv = document.getElementById("citySelector");
		cityContainer.setAttribute("id", area.name.camelCase());
		cityContainer.setAttribute("class", "cityContainer");
		cityDiv.appendChild(cityContainer);
		// You need to create the city container here NAMED by the area
		// However, you need to pass that container to createCityElement to appendChild to it
		// How to pass an additional dynamic parameter in forEach?
		area.cities.forEach(createCityElement, cityContainer);
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
	// The variable data contains all the regional data

	data.states.forEach(createStateElement);
}

window.onload=function() {
	showLocationGrid();
};
