$(document).ready(function() {
 
  // size of header background
  function heightDetect() {
	  $(".main_head").css("height", $(window).height());
  }
  
  heightDetect();
  $(window).resize(function() {
    heightDetect();
  });
  
  // animation for toggle_menu 
  $(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

  $(".top_menu ul a").click(function() {
		$(".top_menu").fadeOut(800);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");
  
  // sandwich effect for menu button
  $(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		}
	});
	
	// some code for portfolio section 
  $(".portfolio_grid").mixItUp();
	
  $(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});
		 
  // activates smooth on page scroll	
	$(".top_menu ul a").mPageScroll2id();
	
	// pop-up images
	$(".popup").magnificPopup({type:"image"});
	$(".pop-up_content").magnificPopup({
		type:"inline",
		midClick: true
	});
	
	$(".image-wrapper").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".pop-up").attr("id", "work_" + i);
	});
	
	// validation for form
	$("input, select, textarea").jqBootstrapValidation();
	
});

$(window).load(function() {
  
  // animation for personal photo
  $(".animation").animated("zoomIn", "zoomOut");
  
  // for preloader 
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");    

  // animation for headers
  $(".top_text h1").animated("fadeInUp" , "fadeInDown");
  $(".top_text p, .section_header").animated("pulse");
  
});