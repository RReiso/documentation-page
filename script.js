const OpenMenuBtn = document.querySelector("#open-nav-btn");
const CloseMenuBtn = document.querySelector("#close-nav-btn");
const sideMenu = document.querySelector(".navigation");

OpenMenuBtn.addEventListener("click", () => {
	sideMenu.classList.add("menu-show");
	OpenMenuBtn.classList.remove("show");
	OpenMenuBtn.classList.add("hide");
	CloseMenuBtn.classList.remove("hide");
	CloseMenuBtn.classList.add("show");
});

CloseMenuBtn.addEventListener("click", () => {
	sideMenu.classList.remove("menu-show");
	CloseMenuBtn.classList.remove("show");
	CloseMenuBtn.classList.add("hide");
	OpenMenuBtn.classList.remove("hide");
	OpenMenuBtn.classList.add("show");
});


