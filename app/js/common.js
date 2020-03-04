$(document).ready(function(){
   $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:false,
    dots: true,
    nav:true,
    mouseDrag:false,
    touchDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


//E-mail Ajax Send
$("#myform-print24").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "./php/mail.php", //Change
		data: th.serialize()
	}).done(function() {
		//alert("Thank you!");
		$('.popup-active').css('display', 'block');
		setTimeout(function() {
			th.trigger("reset");
		});
	});
	return false;
});

$("#myform-roliki").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "./php/mail.php", //Change
		data: th.serialize()
	}).done(function() {
		//alert("Thank you!");
		$('.popup-active').css('display', 'block');
		setTimeout(function() {
			th.trigger("reset");
		});
	});
	return false;
});

$("#myform-ribb").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "./php/mail.php", //Change
		data: th.serialize()
	}).done(function() {
		//alert("Thank you!");
		$('.popup-active').css('display', 'block');
		setTimeout(function() {
			th.trigger("reset");
		});
	});
	return false;
});

//CZ-start
$("#myform-print24-cz").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "./php/mail.php", //Change
		data: th.serialize()
	}).done(function() {
		//alert("Thank you!");
		$('.popup-active').css('display', 'block');
		setTimeout(function() {
			th.trigger("reset");
		});
	});
	return false;
});

$("#myform-roliki-cz").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "./php/mail.php", //Change
		data: th.serialize()
	}).done(function() {
		//alert("Thank you!");
		$('.popup-active').css('display', 'block');
		setTimeout(function() {
			th.trigger("reset");
		});
	});
	return false;
});

$("#myform-ribb-cz").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "./php/mail.php", //Change
		data: th.serialize()
	}).done(function() {
		//alert("Thank you!");
		$('.popup-active').css('display', 'block');
		setTimeout(function() {
			th.trigger("reset");
		});
	});
	return false;
});
//CZ-end

$('.close-btn').click(function() {
  $('.popup-active').css('display', 'none');
  return false;
});
