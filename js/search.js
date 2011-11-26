function createAreaElement(area) {
	console.log(area.name);
	var areaTemp = document.createElement("a");
	var maindiv = document.getElementById("areaSelector");
	var link = document.createAttribute("href");
	link.nodeValue = "/search/";

	areaTemp.appendChild(document.createTextNode(area.name));

	maindiv.appendChild(areaTemp);

	areaTemp.setAttribute(link);
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
						"name": "Inland Empire"
					},
					{
						"name": "Los Angeles County"
					},
					{
						"name": "Orange County"
					},
					{
						"name": "San Francisco Bay Area"
					},
					{
						"name": "Sacramento Area"
					},
					{
						"name": "San Diego Area"
					}
				]
			},
			{
				"name": "Colorado",
				"areas": [
					{
						"name": "Denver Area"
					}
				]
			},
			{
				"name": "Washington",
				"areas": [
					{
						"name": "Seattle Area"
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
