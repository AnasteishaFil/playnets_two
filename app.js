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

$('#mercury_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'block');
	 $('.cycle-planet-venus').toggleClass('cycle-planet-2', true);
	 $('.cycle-planet-earth').toggleClass('cycle-planet-3', true);
	 $('.cycle-planet-mars').css('display', 'none');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	}
	})
$('#venera_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-venus').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
	 $('.cycle-planet-earth').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
	 $('.cycle-planet-mars').toggleClass('cycle-planet-3', true).css('display', 'block');
	 $('.cycle-planet-jupiter').css('display', 'none');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	}
	})
$('#zemlya_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-earth').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
	 $('.cycle-planet-mars').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
	 $('.cycle-planet-jupiter').toggleClass('cycle-planet-3', true).css('display', 'block');
	 $('.cycle-planet-saturn').css('display', 'none');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');
	}
	})
$('#mars_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
	 $('.cycle-planet-mercury').css('display', 'none');
	 $('.cycle-planet-venus').css('display', 'none');
	 $('.cycle-planet-earth').css('display', 'none');
	 $('.cycle-planet-mars').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
	 $('.cycle-planet-jupiter').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
	 $('.cycle-planet-saturn').toggleClass('cycle-planet-3', true).css('display', 'block');
	 $('.cycle-planet-uran').css('display', 'none');
	 $('.cycle-planet-neptune').css('display', 'none');
	 $('.cycle-planet-myplanet').css('display', 'none');	
	}
	})
$('#jupiter_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
		$('.cycle-planet-mercury').css('display', 'none');
		$('.cycle-planet-venus').css('display', 'none');
		$('.cycle-planet-earth').css('display', 'none');
		$('.cycle-planet-mars').css('display', 'none');
		$('.cycle-planet-jupiter').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		$('.cycle-planet-saturn').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		$('.cycle-planet-uran').toggleClass('cycle-planet-3', true).css('display', 'block');
		$('.cycle-planet-neptune').css('display', 'none');
		$('.cycle-planet-myplanet').css('display', 'none');
	
	}
	})
$('#saturn_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
		$('.cycle-planet-mercury').css('display', 'none');
		$('.cycle-planet-venus').css('display', 'none');
		$('.cycle-planet-earth').css('display', 'none');
		$('.cycle-planet-mars').css('display', 'none');
		$('.cycle-planet-jupiter').css('display', 'none');
		$('.cycle-planet-saturn').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		$('.cycle-planet-uran').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		$('.cycle-planet-neptune').toggleClass('cycle-planet-3', true).css('display', 'block');
		$('.cycle-planet-myplanet').css('display', 'none');
	}
	})
$('#uran_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
		$('.cycle-planet-mercury').css('display', 'none');
		$('.cycle-planet-venus').css('display', 'none');
		$('.cycle-planet-earth').css('display', 'none');
		$('.cycle-planet-mars').css('display', 'none');
		$('.cycle-planet-jupiter').css('display', 'none');
		$('.cycle-planet-saturn').css('display', 'none');
		$('.cycle-planet-uran').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		$('.cycle-planet-neptune').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		$('.cycle-planet-myplanet').toggleClass('cycle-planet-3', true).css('display', 'block');
	}
	})
$('#neptun_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
		$('.cycle-planet-mercury').css('display', 'none');
		$('.cycle-planet-venus').css('display', 'none');
		$('.cycle-planet-earth').css('display', 'none');
		$('.cycle-planet-mars').css('display', 'none');
		$('.cycle-planet-jupiter').css('display', 'none');
		$('.cycle-planet-saturn').css('display', 'none');
		$('.cycle-planet-uran').css('display', 'none');
		$('.cycle-planet-neptune').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		$('.cycle-planet-myplanet').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
	}
	})
$('#moya_planeta_btn').on('click', function () {
	if ( $(this).is(':checked') ) {
		$('.cycle-planet-mercury').css('display', 'none');
		$('.cycle-planet-venus').css('display', 'none');
		$('.cycle-planet-earth').css('display', 'none');
		$('.cycle-planet-mars').css('display', 'none');
		$('.cycle-planet-jupiter').css('display', 'none');
		$('.cycle-planet-saturn').css('display', 'none');
		$('.cycle-planet-uran').css('display', 'none');
		$('.cycle-planet-neptune').css('display', 'none');
		$('.cycle-planet-myplanet').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
	}
	})


	$('#link_mercury').on('click', function () {
		 $('.cycle-planet-mercury').css('display', 'block');
		 $('.cycle-planet-venus').toggleClass('cycle-planet-2', true);
		 $('.cycle-planet-earth').toggleClass('cycle-planet-3', true);
		 $('.cycle-planet-mars').css('display', 'none');
		 $('.cycle-planet-jupiter').css('display', 'none');
		 $('.cycle-planet-saturn').css('display', 'none');
		 $('.cycle-planet-uran').css('display', 'none');
		 $('.cycle-planet-neptune').css('display', 'none');
		 $('.cycle-planet-myplanet').css('display', 'none');
		})
	$('#link_venus').on('click', function () {
		 $('.cycle-planet-mercury').css('display', 'none');
		 $('.cycle-planet-venus').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		 $('.cycle-planet-earth').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		 $('.cycle-planet-mars').toggleClass('cycle-planet-3', true).css('display', 'block');
		 $('.cycle-planet-jupiter').css('display', 'none');
		 $('.cycle-planet-saturn').css('display', 'none');
		 $('.cycle-planet-uran').css('display', 'none');
		 $('.cycle-planet-neptune').css('display', 'none');
		 $('.cycle-planet-myplanet').css('display', 'none');
		})
	$('#link_earth').on('click', function () {
		 $('.cycle-planet-mercury').css('display', 'none');
		 $('.cycle-planet-venus').css('display', 'none');
		 $('.cycle-planet-earth').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		 $('.cycle-planet-mars').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		 $('.cycle-planet-jupiter').toggleClass('cycle-planet-3', true).css('display', 'block');
		 $('.cycle-planet-saturn').css('display', 'none');
		 $('.cycle-planet-uran').css('display', 'none');
		 $('.cycle-planet-neptune').css('display', 'none');
		 $('.cycle-planet-myplanet').css('display', 'none');
		})
	$('#link_mars').on('click', function () {
		 $('.cycle-planet-mercury').css('display', 'none');
		 $('.cycle-planet-venus').css('display', 'none');
		 $('.cycle-planet-earth').css('display', 'none');
		 $('.cycle-planet-mars').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		 $('.cycle-planet-jupiter').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		 $('.cycle-planet-saturn').toggleClass('cycle-planet-3', true).css('display', 'block');
		 $('.cycle-planet-uran').css('display', 'none');
		 $('.cycle-planet-neptune').css('display', 'none');
		 $('.cycle-planet-myplanet').css('display', 'none');
		})
	$('#link_jupiter').on('click', function () {
			$('.cycle-planet-mercury').css('display', 'none');
			$('.cycle-planet-venus').css('display', 'none');
			$('.cycle-planet-earth').css('display', 'none');
			$('.cycle-planet-mars').css('display', 'none');
			$('.cycle-planet-jupiter').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			$('.cycle-planet-saturn').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			$('.cycle-planet-uran').toggleClass('cycle-planet-3', true).css('display', 'block');
			$('.cycle-planet-neptune').css('display', 'none');
			$('.cycle-planet-myplanet').css('display', 'none');
		})
	$('#link_saturn').on('click', function () {
			$('.cycle-planet-mercury').css('display', 'none');
			$('.cycle-planet-venus').css('display', 'none');
			$('.cycle-planet-earth').css('display', 'none');
			$('.cycle-planet-mars').css('display', 'none');
			$('.cycle-planet-jupiter').css('display', 'none');
			$('.cycle-planet-saturn').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			$('.cycle-planet-uran').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			$('.cycle-planet-neptune').toggleClass('cycle-planet-3', true).css('display', 'block');
			$('.cycle-planet-myplanet').css('display', 'none');
		})
	$('#link_uranus').on('click', function () {
			$('.cycle-planet-mercury').css('display', 'none');
			$('.cycle-planet-venus').css('display', 'none');
			$('.cycle-planet-earth').css('display', 'none');
			$('.cycle-planet-mars').css('display', 'none');
			$('.cycle-planet-jupiter').css('display', 'none');
			$('.cycle-planet-saturn').css('display', 'none');
			$('.cycle-planet-uran').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			$('.cycle-planet-neptune').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
			$('.cycle-planet-myplanet').toggleClass('cycle-planet-3', true).css('display', 'block');
		})
	$('#link_neptun').on('click', function () {
			$('.cycle-planet-mercury').css('display', 'none');
			$('.cycle-planet-venus').css('display', 'none');
			$('.cycle-planet-earth').css('display', 'none');
			$('.cycle-planet-mars').css('display', 'none');
			$('.cycle-planet-jupiter').css('display', 'none');
			$('.cycle-planet-saturn').css('display', 'none');
			$('.cycle-planet-uran').css('display', 'none');
			$('.cycle-planet-neptune').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
			$('.cycle-planet-myplanet').toggleClass('cycle-planet-3', false).toggleClass('cycle-planet-2', true).css('display', 'block');
		})
	$('#link_moya_planeta').on('click', function () {
			$('.cycle-planet-mercury').css('display', 'none');
			$('.cycle-planet-venus').css('display', 'none');
			$('.cycle-planet-earth').css('display', 'none');
			$('.cycle-planet-mars').css('display', 'none');
			$('.cycle-planet-jupiter').css('display', 'none');
			$('.cycle-planet-saturn').css('display', 'none');
			$('.cycle-planet-uran').css('display', 'none');
			$('.cycle-planet-neptune').css('display', 'none');
			$('.cycle-planet-myplanet').toggleClass('cycle-planet-2', false).toggleClass('cycle-planet-3', false).css('display', 'block');
		})