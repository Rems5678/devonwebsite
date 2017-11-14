$(document).ready(function(){
	//desktop functions
		if ($(window).width() > 769 ) {
			//nav bar
		$("#nav .nav-div").animate({left: "35%", right: 0}, 700, function() {
			$("#nav .nav-div").css({});
		})
//intro div
	$("#intro h1").animate({left: "5%"}, 700);
	$("#intro p").animate({left: "10%"}, 700);
	$("#intro a").animate({left: "20%"});
	$(".background-divs .background-div:eq(0)").animate({
		borderRadius: '20px',
	width:	'100px',
	height: '100px',
	left: '80%',
	top: '300px',
	now: '360px'}, {duration: 1000, step: function (now) {
		$(this).css({transform: "rotate(" + now + "deg)", background:'#1E56A0'})
	}})
	$(".background-divs .background-div:eq(1)").animate({
		borderRadius: '20px',
	width:	'100px',
	height: '100px',
	left: '90%',
	top: '150px',
	now: '360px'}, {duration: 1000, step: function (now) {
		$(this).css({transform: "rotate(" + now + "deg)", background:'#D6E4F0'})
	}})
		$(".background-divs .background-div:eq(2)").animate({
		borderRadius: '20px',
	width:	'100px',
	height: '100px',
	left: '90%',
	top: '450px',
	now: '360px'}, {duration: 1000, step: function (now) {
		$(this).css({transform: "rotate(" + now + "deg)", background:'#D6E4F0'})
	}})
//about me
	//scroll animations for sliding headers when scrolling past them.

	
	var $scrollAnim = $(".scroll-animate")
	var $window = $(window)
	//trigger scroll event on window load to check for a view that should be called
	$window.on('scroll resize', checkIfInView);
	$window.trigger("scroll");
	function checkIfInView() {
		var windowHeight = $window.height();
		var windowTopPosition = $window.scrollTop();
		var windowBotPosition = windowHeight + windowTopPosition
		$.each($scrollAnim, function() {
			var $element = $(this);
			var elementHeight = $element.outerHeight();
			var elementTopPosition = this.offsetTop;
			var elementBotPosition = elementHeight + elementTopPosition
			//check to see if viewport is within window
			if ((elementBotPosition >= windowTopPosition) && (elementTopPosition <= windowBotPosition)) {
				var elementWidth = $element.innerWidth();
				var windowWidth = $window.width();
				var center = (windowWidth - elementWidth)/2
				$element.animate({left: center})

			}
//			else {
//				$element.removeClass("in-view");
//			}
		})
	}
	//education
	$("#lang-tech li").on("click", pushDown);
	
	function pushDown(evt) {
		if($("#lang-tech div").hasClass("showdiv")){
			$("#lang-tech div").removeClass("showdiv");
		}
		$(evt.target).next().addClass("showdiv");
	}
	
	//projects
	
	//contact me
		}
//tablet functions	
if ($(window).width() <= 768 && $(window).width() >= 464) {
	$("#projects .project").removeClass("col-25")
	$("#about-me div").removeClass("col-66").removeClass("col-33");
		//education
	$("#lang-tech li").on("click", pushDown);
	
	function pushDown(evt) {
		if($("#lang-tech div").hasClass("showdiv")){
			$("#lang-tech div").removeClass("showdiv");
		}
		$(evt.target).next().addClass("showdiv");
	}
		//scroll animations for sliding headers when scrolling past them.

	
	var $scrollAnim = $(".scroll-animate")
	var $window = $(window)
	//trigger scroll event on window load to check for a view that should be called
	$window.on('scroll resize', checkIfInView);
	$window.trigger("scroll");
	function checkIfInView() {
		var windowHeight = $window.height();
		var windowTopPosition = $window.scrollTop();
		var windowBotPosition = windowHeight + windowTopPosition
		$.each($scrollAnim, function() {
			var $element = $(this);
			var elementHeight = $element.outerHeight();
			var elementTopPosition = this.offsetTop;
			var elementBotPosition = elementHeight + elementTopPosition
			//check to see if viewport is within window
			if ((elementBotPosition >= windowTopPosition) && (elementTopPosition <= windowBotPosition)) {
				var elementWidth = $element.innerWidth();
				var windowWidth = $window.width();
				var center = (windowWidth - elementWidth)/2
				$element.animate({left: center})

			}
//			else {
//				$element.removeClass("in-view");
//			}
		})
}
}
	//smartphone functions
if ($(window).width() < 464) {
	$("#projects .project").removeClass("col-25")
	$("#about-me div").removeClass("col-66").removeClass("col-33");
			//education
	$("#lang-tech li").on("click", pushDown);
	
		function pushDown(evt) {
		if($("#lang-tech div").hasClass("showdiv")){
			$("#lang-tech div").removeClass("showdiv");
		}
		$(evt.target).next().addClass("showdiv");
	}
			//scroll animations for sliding headers when scrolling past them.

	
	var $scrollAnim = $(".scroll-animate")
	var $window = $(window)
	//trigger scroll event on window load to check for a view that should be called
	$window.on('scroll resize', checkIfInView);
	$window.trigger("scroll");
	function checkIfInView() {
		var windowHeight = $window.height();
		var windowTopPosition = $window.scrollTop();
		var windowBotPosition = windowHeight + windowTopPosition
		$.each($scrollAnim, function() {
			var $element = $(this);
			var elementHeight = $element.outerHeight();
			var elementTopPosition = this.offsetTop;
			var elementBotPosition = elementHeight + elementTopPosition
			//check to see if viewport is within window
			if ((elementBotPosition >= windowTopPosition) && (elementTopPosition <= windowBotPosition)) {
				var elementWidth = $element.innerWidth();
				var windowWidth = $window.width();
				var center = (windowWidth - elementWidth)/2
				$element.animate({left: center})

			}
//			else {
//				$element.removeClass("in-view");
//			}
		})
}
}
})
