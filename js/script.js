const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
	indicators: false,
	height : 600,
	duration : 800,
	interval : 3000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax, {
	responsiveThreshold: 100
});

const materialboxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialboxed, {
	inDuration : 500,
	outDuration : 500
});


// parallax
// $(window).scroll(function(){
// 	var wScroll = $(this).scrollTop();

// 	$('.slides .caption').css({
// 		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
// 	});
// });

