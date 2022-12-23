// document.oncontextmenu = function () {
//   return true;
// }
//
// window.onload = function () {
//   var user = JSON.parse(localStorage.getItem('currentUser'));
//   if (user) {
//     console.log(`Hello ${user.name}!`);
//   }
// }
//
// window.onbeforeunload = function () {
//   console.log('close window');
//   return false;
// }

// var screenWidth = window.innerWidth;
// var screenHeight = window.innerHeight;
// var screen = window.matchMedia("(max-width: 700px)");
// var menu = document.getElementById('menu');
//
// myFun(screen);
//
// screen.addEventListener();
//
// function myFun(screen) {
//   if (screen.matches) {
//     // alert('< 700');
//   } else {
//     // alert('> 700');
//   }
// }

//
// console.log('Width - ' + screenWidth);
// console.log('Height - ' + screenHeight);
$('burger-menu').click(() => {
  $('#nav').toggleClass('activeNavigation');
});

