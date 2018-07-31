$('.page-scroll').on('click', function(){
	let href = $(this).attr('href');
	let elemenHref = $(href);

	$('html').animate({
		scrollTop : elemenHref.offset().top -60
	}, 2000, 'easeInOutExpo');

	$('nav ul li a').removeClass('active-nav');
		$(this).addClass('active-nav');

});

// $(document).ready(function(){
// 	$('.materialboxed').materialbox();
// });


$(window).scroll(function(){

	let wScroll = $(this).scrollTop();
	
	// materi
	if (wScroll > $('.materi').offset().top - 200 ) {
		$('.materi .card-panel').each(function(i){
			setTimeout(function(){
				$('.materi .card-panel').eq(i).addClass('muncul');	
			}, 200 * (i+1));
		});

	} 

	if(wScroll > $('.portfolio').offset().top - 200) {

		$('.portfolio .box').each(function(i){
			setTimeout(function(){
				$('.portfolio .box').eq(i).addClass('bmuncul');

			}, 200 * (i+1));
		});
	}

});

$(window).on('load', function(){



		$('.kiri').addClass('pmuncul');
		$('.kanan').addClass('pmuncul');
});