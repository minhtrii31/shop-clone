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
        setTimeout("switchImage()", 500)
      }
      var IMGcurrent = 1
      var numIMG = 2
      function switchImage(){
        IMGcurrent++
        document.images['myimage'].src ='./assets/images/news_' + IMGcurrent + '.png'
        if(IMGcurrent == numIMG){IMGcurrent = 0}
	setTimeout("switchImage()", 500)
}
$(function() {
	$('.nav_bar-nav').slick({
		slidesToShow:11,
		slidesToScroll:11,
		arrows:true,
		prevArrow:'.nav_bar .arrow_prev',
		nextArrow:'.nav_bar .arrow_next',
		responsive: [
			{
				breakpoint: 1300,
				settings: {
				  slidesToShow: 8,
				  slidesToScroll: 8,
				}
			},
			{
				breakpoint: 1150,
				settings: {
				  slidesToShow: 6,
				  slidesToScroll: 6,
				}
			},
			{
			  breakpoint: 1024,
			  settings: {
			    slidesToShow: 4,
			    slidesToScroll: 4,
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
			    slidesToShow: 3,
			    slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 2
			  }
			},
			{
				breakpoint: 500,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			}
		      ]
	}) 
})

function show_prev_arrow() {
	document.getElementById("prev_hide").style.display = "block";
	document.getElementById("next_hide").style.display = "none";
}
function show_next_arrow() {
	document.getElementById("prev_hide").style.display = "none";
	document.getElementById("next_hide").style.display = "block";
}