
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

// input.onblur = function() {
//     if (!input.value.includes('null')) { // not email
//       input.classList.add('invalid');
//       error.innerHTML = 'Please enter a correct email.'
//     }
//   };
  
// function checkForm(){
//     var element = document.body.querySelector('.required');
//     if(document.contactForm.name.value === "" || document.contactForm.name.value === null){
//         element.classList.add(".borderRed");
//     } else {
//         element.classList.add(".borderBlue");
//     };
// };

// document.querySelector(".required").style.border ="1px solid rgba(0, 166, 255, 7)";

// function myfunc(value) {
//  var add = document.querySelector(".required");

// 	if(btn.style.display=="block"){
// 		// noneで非表示
// 		btn.style.display ="none";
// 	}else{
// 		// blockで表示
// 		btn.style.display ="block";
// 	}
// }

//   input.onfocus = function() {
//     if (this.classList.contains('invalid')) {
//       // ユーザは何かを再入力したいので "エラー" 表示を削除します
//       this.classList.remove('invalid');
//       error.innerHTML = "";
//     }
//   };