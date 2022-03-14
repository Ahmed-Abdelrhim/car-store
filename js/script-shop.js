let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

document.querySelector('#search').onclick = () =>{
    document.querySelector('.search-container').classList.toggle('active');
}

document.querySelector('#close-search').onclick = () =>{
    document.querySelector('.search-container').classList.remove('active');
}

window.onscroll = () =>{
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }

    
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

window.onload = () =>{
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}

//popular
var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disabbleOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        991: {
        slidesPerView: 3,
        },
    },
});


// scroll top
let span = document.querySelector(".top");

window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
        span.style.display = "block";
    } else {
        span.style.display = "none";
    }
   //  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
};



// chat
$(function() {
    $(document).delegate(".chat-btn", "click", function() {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        generate_message(name, 'self');
    })
    
    $("#chat").click(function() {    
        $("#chat").toggle('scale');
        $(".chat-box").toggle('scale');
    })
    
    $(".chat-box-toggle").click(function() {
        $("#chat").toggle('scale');
        $(".chat-box").toggle('scale');
    })
    
})