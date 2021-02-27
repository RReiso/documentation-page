const toggleMenuBtn = document.querySelector("#open-nav-btn");
const toggleMenuBtn2 = document.querySelector("#close-nav-btn");
const sideMenu = document.querySelector(".navigation");
// let link = document.querySelectorAll(".nav-link");

toggleMenuBtn.addEventListener("click", () => {
	sideMenu.classList.add("menu-show");
	toggleMenuBtn.classList.remove("show");
	toggleMenuBtn.classList.add("hide");
	toggleMenuBtn2.classList.remove("hide");
	toggleMenuBtn2.classList.add("show");
});

toggleMenuBtn2.addEventListener("click", () => {
	sideMenu.classList.remove("menu-show");
	toggleMenuBtn2.classList.remove("show");
	toggleMenuBtn2.classList.add("hide");
	toggleMenuBtn.classList.remove("hide");
	toggleMenuBtn.classList.add("show");
});


