let sideMenu = document.querySelector('#side-menu');
let sideBar = document.querySelector('.side-bar');

sideMenu.onclick = () =>{
   sideMenu.classList.toggle('fa-times');
   sideBar.classList.toggle('active');
};



document.querySelector('.reset-btn .btn').onclick = () =>{
   window.location.reload();
};



// scroll top
let span = document.querySelector(".top");

window.onscroll = function () {
   console.log(window.scrollY);
   if (window.scrollY >= 100) {
      span.style.display = "block";
   } else {
      span.style.display = "none";
   }
   //  this.scrollY >= 100 ? span.style.display = "block" : span.style.display = "none";
};

span.onclick = function () {
   window.scrollTo({
   top: 0,
   behavior: "smooth",
   });
};