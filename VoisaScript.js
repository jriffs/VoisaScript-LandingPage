const menuButton = document.querySelector(".menu-btn"),
  navigationList = document.querySelector(".nav-list");
let stat = true;

menuButton.addEventListener("click", openMenu);
function openMenu() {
  if (stat) {
    navigationList.classList.add("opened");
    stat = false;
  } else {
    navigationList.classList.remove("opened");
    stat = true;
  }
}
