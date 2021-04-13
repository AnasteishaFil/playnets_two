$('.menu_btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu_btn_active');
	$('.slide_menu').toggleClass('slide_menu_active');
	$('.nav_menu').toggleClass('nav_menu_active');
	$('.poloska1').toggleClass('poloska_active');
	$('.poloska2').toggleClass('poloska_active');
	$('.poloska3').toggleClass('poloska_active');
});
$('.menu_link_btn').on('click', function(e){
	e.preventDefault;
	$('.planet_list').toggleClass('planet_list_active');
	$('.arrow').toggleClass('arrow_active');
	$('.poloska_active').toggleClass('poloska_act');
	$('.poloska_active').toggleClass('poloska_act');
	$('.poloska_active').toggleClass('poloska_act');
});
$('#mercury_btn').on('click', function (e) {
	e.preventDefault;
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-venus').toggleClass('cycle-planet_act2');
	 $('.cycle-planet-earth').toggleClass('cycle-planet_act3');
	 $('.cycle-planet-mars').css('display', 'none');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.cycle-planet-mercury').css('display', 'block');
	}
	})
$('#venera_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-earth').toggleClass('cycle-planet_act2').toggleClass('cycle-planet_act3');
	 $('.cycle-planet-mars').toggleClass('cycle-planet_act3');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.cycle-planet-venus').toggleClass('cycle-planet_act2').css('display', 'block');
	
	}
	})
$('#zemlya_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-mars').css('display', 'none');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.cycle-planet-earth').css('display', 'block');
	
	}
	})
$('#mars_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-earth').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.cycle-planet-mars').css('display', 'block');
	
	}
	})
$('#jupiter_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-earth').css('display', 'none');
	 $('.cycle-planet-mars').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.cycle-planet-jupiter').css('display', 'block');
	
	}
	})
$('#saturn_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-earth').css('display', 'none');
	 $('.cycle-planet-mars').css('display', 'none');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'block');
	
	}
	})
$('#uran_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-earth').css('display', 'none');
	 $('.cycle-planet-mars').css('display', 'none');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'block');
	
	}
	})
$('#neptun_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-earth').css('display', 'none');
	 $('.cycle-planet-mars').css('display', 'none');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'block');
	
	}
	})
$('#moya_planeta_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-earth').css('display', 'none');
	 $('.cycle-planet-mars').css('display', 'none');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'block');
	}
	})