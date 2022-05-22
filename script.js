let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let toggleBtn = document.querySelector('.toggle-btn');

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop:true,
  autoplay:{
    delay: 3000,
    disableOnInteraction:false,
  }
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },    
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction:false,
  }
});

function api (){
  var eth = document.getElementById('btc');
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
  console.log(this.responseText);
  var data = JSON.parse(this.responseText);
  console.log(data.tickers[0].price);
  eth.innerHTML = "Price of Bitcoin: $" + data.tickers[0].price;
  }
  });
  
  xhr.open("GET", "https://api.coinstats.app/public/v1/tickers?exchange=yobit&pair=BTC-USD");
  xhr.send();
  }

  document.addEventListener('DOMContentLoaded', function () {
    api();
    
});