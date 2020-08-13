new WOW().init();
$(".logo").animated("zoomInLeft");
$(".speaker").animated("fadeInLeft");
$(".speaker").animated("fadeInRight");


$("window").load(function() {
  $("body").removeAttr("id");
});

$('.navbar-toggler').on('click', function (e) {
	e.preventdefoult;
	$(this).toggleClass('navbar-toggler_active')
});