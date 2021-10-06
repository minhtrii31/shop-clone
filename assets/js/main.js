
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
	setTimeout("switchImage()", 3000)
}
$(function() {
	$('.nav_bar-nav').slick({
		slidesToShow:8,
		slidesToScroll:8,
		arrows:true,
		prevArrow:'.arrow_prev',
		nextArrow:'.arrow_next',
		responsive: [
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

function show_prev_arrow_nav() {
	document.getElementsByClassName("slick-disabled")[0].style.display = "block";
	document.getElementsByClassName("slick-enabled")[0].style.display = "none";
}
function show_next_arrow_nav() {
	document.getElementsByClassName("slick-disabled")[0].style.display = "none";
	document.getElementsByClassName("slick-enabled")[0].style.display = "block";
}
function show_prev_arrow_deal() {
	document.getElementsByClassName("slick-disabled")[1].style.visibility  = "visible";
	document.getElementsByClassName("slick-enabled")[1].style.visibility  = "hidden";
}
function show_next_arrow_deal() {
	document.getElementsByClassName("slick-disabled")[1].style.visibility = "hidden";
	document.getElementsByClassName("slick-enabled")[1].style.visibility = "visible";
}
function show_prev_arrow_brand() {
	document.getElementsByClassName("slick-disabled")[2].style.display = "block";
	document.getElementsByClassName("slick-enabled")[2].style.display = "none";
}
function show_next_arrow_brand() {
	document.getElementsByClassName("slick-disabled")[2].style.display = "none";
	document.getElementsByClassName("slick-enabled")[2].style.display = "block";
}
function show_prev_arrow_top() {
	document.getElementsByClassName("slick-disabled")[3].style.display = "block";
	document.getElementsByClassName("slick-enabled")[3].style.display = "none";
}
function show_next_arrow_top() {
	document.getElementsByClassName("slick-disabled")[3].style.display = "none";
	document.getElementsByClassName("slick-enabled")[3].style.display = "block";
}

$(function() {
	$('.hot__deal').slick({
		slidesToShow:6,
		slidesToScroll:6,
		arrows:true,
		prevArrow:'.sale__item-control-prev',
		nextArrow:'.sale__item-control-next',
		responsive: [
			{
				breakpoint: 1100,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4,
				}
			},
			{
				breakpoint: 800,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				}
			},
			{
				breakpoint: 600,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				}
			},
			{
				breakpoint: 400,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			},
		]
	}) 
})

$('.upcoming__deal-banner').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	dots:true,
	prevArrow:'.upcoming__deal-control-prev',
	nextArrow:'.upcoming__deal-control-next',
});
function register_button() {
	var user_name = document.getElementById("mail-user").value;
	var password_first = document.getElementById("password-user").value;
	var password_second = document.getElementById("password-confirm").value;
	if (user_name == '' || password_first == '' || password_second == '') {
		document.getElementById("register-error-messenger").innerHTML = "Vui lòng nhập đầy đủ thông tin yêu cầu."
	}
	else if (password_first != password_second) {
		document.getElementById("register-error-messenger").innerHTML = "Nhập mật khẩu sai, vui lòng nhập lại."
	}
	else {
		document.getElementById("header-user-has-login").style.display="block";
		document.getElementById("header-register-button").style.display="none";
		document.getElementById("header-login-button").style.display="none";
		document.getElementById("overlay").style.display = "none";
		document.getElementById("register").style.display = "none";
		document.getElementById("header__navbar-user-name").innerHTML = user_name;
	}
}
function login_button() {
	var username = document.getElementById("mail-login").value;
	var password = document.getElementById("password-login").value;
	if (username == '' || password== '' ) {
		document.getElementById("login-error-messenger").innerHTML = "Vui lòng nhập đầy đủ thông tin yêu cầu."
	}
	else {
		document.getElementById("header-user-has-login").style.display="block";
		document.getElementById("header-register-button").style.display="none";
		document.getElementById("header-login-button").style.display="none";
		document.getElementById("overlay").style.display = "none";
		document.getElementById("login").style.display = "none";
		document.getElementById("header__navbar-user-name").innerHTML = username;
	}
}

// Count-down 

var minutes = 30;

var target_date = new Date().getTime() + ((minutes * 60) * 1000);
var time_limit = ((minutes * 60) * 1000);
var day, hours, minutes, seconds;


getCountdown();

setInterval(function () { getCountdown(); }, 1000)

function getCountdown() {
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	if ( seconds_left >= 0) {
		console.log(time_limit);
		day = pad( parseInt ( seconds_left / 84000));
		seconds_left = seconds_left % 84000;
		
		hours = pad( parseInt(seconds_left / 3600) );
		seconds_left = seconds_left % 3600;
			
		minutes = pad( parseInt(seconds_left / 60) );
		seconds = pad( parseInt( seconds_left % 60 ) );
	}
	document.getElementById("count_down-hours").innerHTML = hours;
	document.getElementById("count_down-minutes").innerHTML = minutes;
	document.getElementById("count_down-seconds").innerHTML = seconds;
}
function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

$(function() {
	$('.brand__card-list-item').slick({
		slidesToShow:6,
		slidesToScroll:3,
		arrows:true,
		prevArrow:'.brand-icon-prev',
		nextArrow:'.brand-icon-next',
		responsive: [
			{
				breakpoint: 1100,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll: 4,
				}
			},
			{
				breakpoint: 900,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4,
				}
			},
			{
				breakpoint: 700,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				}
			},
		]
	}) 
})

$(function() {
	$('.top__trending-list').slick({
		slidesToShow:4,
		slidesToScroll:3,
		arrows:true,
		prevArrow:'.top__trending-icon-prev',
		nextArrow:'.top__trending-icon-next',
		responsive: [
			{
				breakpoint: 950,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				}
			},
			{
				breakpoint: 650,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			},
		]
	}) 
})