function showStartMenu() {
	if(smenu.style.visibility == "hidden") {
		console.log("Start Menu Opened");
		document.getElementById('smenu').style.visibility = "visible";
	}
	else {
		console.log("Start Menu Hidden");
		document.getElementById('smenu').style.visibility = "hidden";
	}	
}