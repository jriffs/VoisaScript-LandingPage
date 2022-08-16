const menuButton = document.querySelector(".menu-btn"),
  navigationList = document.querySelector(".nav-list"),
  heroContent = document.querySelector(".hero-content ");

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

window.addEventListener('resize', e =>{
  let width = document.body.clientWidth;
  console.log(width)
  if(parseInt(width)>480){
    heroContent.classList.add("show")
    console.log("check")
  }
  else{
    heroContent.classList.remove("show");
  }
})
