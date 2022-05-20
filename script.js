var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsmenuToggle(argument) {
	settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
	darkBtn.classList.toggle("dark-btn-on");
	document.body.classList.toggle("dark-theme");
}