$(document).ready(function(){
		
//nav bar
		$("#nav ul").animate({marginLeft: "70%"}, 700)
//intro div
	$("#intro h1").animate({marginLeft: "76px"}, 700);
	$("#intro p").animate({marginLeft: 200}, 700);
	$("#intro button").animate({left: "700px"}, 700);
	$(".background-divs .background-div:eq(0)").animate({
		borderRadius: '20px',
	width:	'100px',
	height: '100px',
	left: '75%',
	top: '300px',
	now: '360px'}, {duration: 1000, step: function (now) {
		$(this).css({transform: "rotate(" + now + "deg)", background:'#1E56A0'})
	}})
	$(".background-divs .background-div:eq(1)").animate({
		borderRadius: '20px',
	width:	'100px',
	height: '100px',
	left: '85%',
	top: '150px',
	now: '360px'}, {duration: 1000, step: function (now) {
		$(this).css({transform: "rotate(" + now + "deg)", background:'#D6E4F0'})
	}})
		$(".background-divs .background-div:eq(2)").animate({
		borderRadius: '20px',
	width:	'100px',
	height: '100px',
	left: '85%',
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

				$element.animate({left: '50%'})

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
})