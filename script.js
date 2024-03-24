$('document').ready(function(){
function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
};
$("#SubB").on("click", function () {
	var valid = true;
	$('#userError').html("");
	$('#emailError').html("");
	$('#passwordError').html("");
    if ($("#UserName").val().length < 6) {
        $('#userError').html("Username must be more than 6 character.");
        valid = false;
    }
    if (!ValidateEmail($("#Email").val())) {
        $('#emailError').html("Invalid email address.");
        valid = false;
    }
    if ($("#Password").val() == "") {
        $('#passwordError').html("Password field can not be empty.");
        valid = false;
    }
    if (valid == false){
    	return false;
    }
});

$('.slider4').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 80,
    pager:false,
    nextText:'<span id="testper" class="glyphicon glyphicon-menu-left" ></span>',
    prevText:'<span id="testnex" class="glyphicon glyphicon-menu-right"></span>',
    nextSelector: '#NextSecc',
    prevSelector: '#PrevSecc'
  });
var section1 = '*[data-section = "section1"]';
var section2=  '*[data-section = "section2"]';
var section3 = '*[data-section = "section3"]';	
var section4 = '*[data-section = "section4"]'; 

	
$(section1).click(function() {
  $("html,body").animate({
	  scrollTop: ($("section#section1").offset().top - 60)
	},500);
});

$(section2).click(function() {
  $("html,body").animate({
	  scrollTop: ($("section#section2").offset().top + 200)
	},500);
});

$(section3).click(function() {
  $("html,body").animate({
	  scrollTop: ($("section#section3").offset().top - 80)
	},500);
});

$(section4).click(function() {
  $("html,body").animate({
	  scrollTop: ($("section#section4").offset().top - 80)
	},500);
});

$(arr).click(function() {
  $("html,body").animate({
	  scrollTop: ($("section#section1").offset().top - 80)
	},500);
});
	
var s1 = $("section#section1").offset().top - 80;
var s2 = $("section#section2").offset().top + 200;
var s3 = $("section#section3").offset().top - 80;
var s4 = $("section#section4").offset().top - 80;
var s0 = $("section#section0").offset().top - 80;
	
	$(window).scroll(function()
	{	

		if($(window).scrollTop() >= s0 && $(window).scrollTop() < s1)
		{
			if($(section1).hasClass("active"))
			{
				$(section1).removeClass("active");	
			}
			if($(section2).hasClass("active"))
			{
				$(section2).removeClass("active");	
			}
			if($(section3).hasClass("active"))
			{
				$(section3).removeClass("active");
			}
			if($(section4).hasClass("active"))
			{
				$(section4).removeClass("active");
			}

			
			$("nav").css("position", "relative");


		}

		if($(window).scrollTop() >= s1 && $(window).scrollTop() < s2)
		{
			

			$("nav").css("position", "fixed");
			
			$(section1).addClass("active");
			if($(section2).hasClass("active"))
			{
				$(section2).removeClass("active");	
			}
			if($(section3).hasClass("active"))
			{
				$(section3).removeClass("active");
			}
			if($(section4).hasClass("active"))
			{
				$(section4).removeClass("active");
			}
		}
		
		if($(window).scrollTop() >= s2 && $(window).scrollTop() < s3)
		{
			$("nav").css("position", "fixed");

			$(section2).addClass("active");
			if($(section1).hasClass("active"))
			{
				$(section1).removeClass("active");	
			}
			if($(section3).hasClass("active"))
			{
				$(section3).removeClass("active");
			}
			if($(section4).hasClass("active"))
			{
				$(section4).removeClass("active");
			}
		}
		
		if($(window).scrollTop() >= s3 && $(window).scrollTop() < s4)
		{

			$("nav").css("position", "fixed");

			$(section3).addClass("active");
			if($(section1).hasClass("active"))
			{
				$(section1).removeClass("active");	
			}
			if($(section2).hasClass("active"))
			{
				$(section2).removeClass("active");
			}
			if($(section4).hasClass("active"))
			{
				$(section4).removeClass("active");
			}
		}


		if($(window).scrollTop() >= s4)
		{
			$("nav").css("position", "fixed");

			$(section4).addClass("active");
			if($(section1).hasClass("active"))
			{
				$(section1).removeClass("active");	
			}
			if($(section2).hasClass("active"))
			{
				$(section2).removeClass("active");
			}
			if($(section3).hasClass("active"))
			{
				$(section3).removeClass("active");
			}
		}
	});
	
	
	


	///////////////////////Validation Form/////////////////////////////////////////////
	


});




document.getElementById("SubL").onclick = function()
{

	document.getElementById("img1").src = "img/img2.jpg";
	document.getElementById("GS").innerHTML = "Log in";
	document.getElementById("TC").innerHTML = "<a href=''>Forgot your password?<a>";
	document.getElementById("info1").innerHTML = "All your bits, whenever,";
	document.getElementById("info2").innerHTML = "wherever";
	document.getElementById("info3").innerHTML = "All your images, notes, documents and voice notes just a click away!";
	document.getElementById("UserName").placeholder = "Username or email ...";
	document.getElementById("SubB").value = "Log in";
	document.getElementById("SubL").value = "Sign up";
	document.getElementById("Email").remove();
	document.getElementById("del1").remove();
	document.getElementById("del2").remove();
	document.getElementById("LGnav").innerHTML = "Sign up";
	document.getElementById("userError").remove();
	document.getElementById("emailError").remove();
	document.getElementById("passwordError").remove();


	
};
