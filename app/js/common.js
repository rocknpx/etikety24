


//E-mail Ajax Send
$("#myform-print24").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "php/mail.php", //Change
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
		url: "php/mail.php", //Change
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
		url: "php/mail.php", //Change
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
		url: "../php/mail.php", //Change
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
		url: "../php/mail.php", //Change
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
		url: "../php/mail.php", //Change
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


//Аutosize
autosize($('textarea'));



jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});






$(function() {
  // Проверяем запись в куках о посещении
  // Если запись есть - ничего не происходит
     if (!$.cookie('hideModal')) {
  // если cookie не установлено появится окно
  // с задержкой 5 секунд
    var delay_popup = 1000;
    setTimeout("document.querySelector('.bottom__cookie-block').style.display='inline-block'", delay_popup);
     }
     $.cookie('hideModal', true, {
   // Время хранения cookie в днях
    expires: 30,
    path: '/'
   });
});

// Закрытие полосы cookie


$('.ok').click(function(){
    $('.bottom__cookie-block').fadeOut();
});
