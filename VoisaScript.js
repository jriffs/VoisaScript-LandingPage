const menuButton = document.querySelector(".menu-btn"),
  navigationList = document.querySelector(".nav-list"),
  navigationListItems = document.querySelector(".nav-list_item"),
  heroContent = document.querySelector(".hero-content "),
  aboutInfo = document.querySelector(".about--info h3");

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
// window.addEventListener("resize", () => {
//   const text = aboutInfo;
//   let width = document.body.clientWidth;
//   const about = document.createElement('p')
//   about.innerText = `
//   VoisaScript is a cross-platform web & code-editor Extension that adds comments to your code, 
//   but those comments are in audio format and not the traditional text format. 
//   VoisaScript also makes these "audio comments" readily available on most web browsers 
//   (for access on GitHub, GitLab and 
//   other source control platforms) and code-editors (currently only on VS code, 
//   but we're working on extending to other editors )
//   `;

//   if (parseInt(width) > 1000) {
//     aboutInfo.after(about);
//   }
// });

// Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
