/* Author:

*/

$(document).ready(function() {
	$("input#movedate").datepicker({
		//showOn: 'button',
		//buttonImage: 'images/calendar.gif',
		//buttonImageOnly: true,
		minDate: -0
	});
});

function setCity(region) {
	var regionName = region.value;
	document.getElementById("area"+regionName).style.display = "block";
	/*switch (regionName) {
		case "Arizona":
			//document.getElementById("areas").innerHTML = "<div>Optionally, would you like to search within a city?</div>";
			document.getElementById("areaArizona").style.display = "block";
			break;
		default:
			alert("No state selected");
	}*/
}
