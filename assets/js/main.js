function register_form() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("register").style.display = "block";
	document.getElementById("register").style.margin = "200px auto";
}
function back_from_form_register() {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("register").style.display = "none";
}
function login_form() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("login").style.display = "block";
	document.getElementById("login").style.margin = "200px auto";
}
function back_from_form_login() {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("login").style.display = "none";
}
// Slider news change image
window.onload = function(){
        setTimeout("switchImage()", 5000)
      }
      var IMGcurrent = 1
      var numIMG = 2
      function switchImage(){
        IMGcurrent++
        document.images['myimage'].src ='./assets/images/news_' + IMGcurrent + '.png'
        if(IMGcurrent == numIMG){IMGcurrent =0}
}