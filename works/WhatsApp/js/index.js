// top nav
$(function() {
	var nav = $("nav ul li");
	nav.hover(function() {
		$(this).addClass("selected");
	}, function() {
		$(this).removeClass("selected");
	});
});

// toggle Language
$(function() {
	var toggleLang = $(".toggleLanguage");
	var langMenu = $(".dropDownMenu");
	var dropHeader = $(".dropDownHeader");
	toggleLang.click(function() {
		langMenu.slideDown("fast");
	});
	dropHeader.click(function() {
		langMenu.slideUp("fast");
	});
});

// banner

$(function() {
	var banner = $(".banner ul");
	var	bannerLen = $(".banner ul li").length;
	var bannerOne = $(".banner ul li:eq(0)");
	var iNow = 0;
	var timer = null;
	banner.mouseover(function () {
		clearInterval(timer);
	}).mouseout(function() {
		timer = setInterval(toRun, 3000);
	});
	timer = setInterval(toRun, 3000);
	function toRun() {
		iNow++;
		if(iNow == bannerLen-1) {
			bannerOne.css({"position": "relative", "right": -1090});
		}
		banner.animate({left: -iNow * 218}, 500, function() {
			if(iNow == bannerLen) {
			banner.css("left", 0);
			bannerOne.css("position", "static");
			iNow = 0;
			}	
		});
	}
});