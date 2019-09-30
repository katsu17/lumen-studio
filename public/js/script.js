
console.log("js successfully loaded!");

var topBackGroundVideo = document.querySelectorAll('#topBackGroundVideo');
topBackGroundVideo.autoplay  = true;
topBackGroundVideo.loop  = true;

function togglemenu() {
    var element = document.body.querySelector('.spMenus');
    element.classList.toggle("opened");
    var element = document.body.querySelector('.menuShadow');
    element.classList.toggle("opened");
    // var element = document.body.querySelector('.menuIcon');
    // element.classList.toggle("displayNone");
}

