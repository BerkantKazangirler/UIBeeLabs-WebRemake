var responaktif = false;
var windowwitdh = null;

$(document).on('click', '#cookie-button', function (e) {
  $(".cookie-settings").css("display","none");
  console.log("Çerezleri Kabul Etti");
});

function responsivemenu() {
  var navbar = document.getElementsByClassName('header-container');
  var responsivemenu = document.getElementsByClassName('responsive-menu');
  for(var i = 0; i < navbar.length; i++){
    if(responsivemenu[i].style.display == "block") {
      responsivemenu[i].style.display = "none";
      $(".nav-links").css("display","block");
      $(".hamburger").css("display","block");
      responaktif = false;
    } else {
      $(".nav-links").css("display","none");
      $(".hamburger").css("display","none");
      $(".hamburger-lines-resp").css("display","block");
      responsivemenu[i].style.display = "block";
      $(".responsive-menu").css("animation","fadeIn 0.5s")
      responaktif = true;
    }
  }
}

$(document).ready(function() {
  window.addEventListener('resize', function(event) {
    windowwitdh = window.innerWidth;
  }, true);
})

window.onscroll = function() {scroolbar()};
function scroolbar() {
  var navbar = document.getElementsByClassName('header-container');
  var navitem = document.getElementsByClassName('nav-links');
  if(responaktif == false) {
    for(var a = 0; a < navbar.length; a++){
      if (document.documentElement.scrollTop >= 1) {
        $(".nav-links").fadeOut(200);
        $(".header-container").css("background-color","white");
        $(".header-container").css("box-shadow","0 0 0 1px rgba(58, 58, 58, 0.09)");
      } else {
        if(navitem[a].style.display == "flex") {
          console.log("Responsive Aktif");
          $(".header-container").css("box-shadow","0 0 0 0");
        }
        else {
          if(windowwitdh >= 1390) {
            $(".nav-links").fadeIn(200);
            $(".header-container").css("background-color","transparent");
            $(".header-container").css("box-shadow","0 0 0 0");
          }
          else {
            $(".header-container").css("box-shadow","0 0 0 0");
            console.log("Değer yetersiz");
          }
        }
      }
    }
  }
}