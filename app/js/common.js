


//E-mail Ajax Send

//CZ-start

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

//CZ-end

//RU-start

$("#myform-print24").submit(function() { //Change
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

$("#myform-roliki").submit(function() { //Change
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

$("#myform-ribb").submit(function() { //Change
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

//RU-end


// Pop-up

$('.close-btn').click(function() {
  $('.popup-active').css('display', 'none');
  return false;
});


//Аutosize

autosize($('textarea'));






//Cookie

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



//Block-menu

// Cache selectors
var lastId,
  topMenu = $("#block-menu-id"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
}, 400);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});


//Header-slider

$('#JiSlider').JiSlider({
	color:'rgba(0, 0, 0, .3)',
	// animation speed
	time: 600,
	// transition delay
	stay: 6000,
});
