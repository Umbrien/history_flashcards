function changeH1TitleDescriptionDisplay() {
	descriptionStyle = document.getElementById("h1-title-description").style.display;
	if (descriptionStyle == "none" || descriptionStyle == "") {
		document.getElementById("h1-title-description").style.display = "block"
	}
	else {
		document.getElementById("h1-title-description").style.display = "none"
	}
}
