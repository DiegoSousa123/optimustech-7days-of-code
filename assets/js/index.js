let cNav = document.body.querySelector(".c-nav");
let hamburger = document.body.querySelector(".js-hamburger");

hamburger.addEventListener("click", function () {
	let hamburgerAttr = hamburger.getAttribute("aria-expanded") === "false";
	hamburger.setAttribute("aria-expanded", `${hamburgerAttr}`);
	console.log(hamburgerAttr);
	menuState();
});
cNav.onclick = function () {menuState();}
function menuState(){
	cNav.classList.toggle("c-nav--visible");
	hamburger.classList.toggle('js-hamburger--active');
}
 