	/* 搜索框获得,失去焦点动作 */
$(function() {
	var inputSearch = $(".search-input"),
		inputText;
	inputSearch.focus(function() {
		inputText = $(this).val();
		if(inputText == this.defaultValue) {
			$(this).val("");
		}
	}).blur(function() {
		inputText = $(this).val();
		if(inputText == ""){
			$(this).val(this.defaultValue);
		}
	});
});

	/* 搜索按钮样式 */
$(function() {
	var search_btn = $(".search-btn"),
		search_btnDefault = $(".search-btnDefault"),
		search_btnHover = $(".search-btnHover");
	search_btn.hover(function (){
		search_btnDefault.hide();
		search_btnHover.show();
	},function() {
		search_btnDefault.show();
		search_btnHover.hide();
	});
});

	/* 切换语言jQuery */
$(function() {
	var lang = $(".menu-lang"),
		langList = $(".menu-langList")
	/* 元素重叠使用mouseenter不事件冒泡 */
	lang.mouseenter(function() {
		langList.stop().slideDown();
	});
	langList.hover(function() {
		langList.show();
	}, function(){
			langList.stop().hide();
	});
});

	/* 搜索框下的热搜商品 */
$(function () {
	var x = 20,
		y = 10;
	$(".tooltip").mouseover(function(event) {
		this.myTitle = this.title;
		this.title = "";
		var tooltip = "<div id='tooltip'>" + this.myTitle + "</div>";
		$("body").append(tooltip);
		$("#tooltip").css({
			"top": (event.pageY + y) + "px",
			"left": (event.pageX + x) + "px"}).fadeIn("fast");
	}).mouseout(function(event) {
		this.title = this.myTitle;
		$("#tooltip").remove();
	}).mousemove(function(event) {
		$("#tooltip").css({
			"top": (event.pageY + y) + "px",
			"left": (event.pageX + x) + "px"});
	});
});

	/* 购物车 */
$(function() {
	var carts = $(".carts"),
		carts_num = $(".carts-list");
	carts.mouseover(function() {
		$(this).addClass('selected');
		carts_num.show();
	}).mouseout(function () {
		$(this).removeClass('selected');
		carts_num.hide();
	});
	carts_num.mouseover(function() {
		carts.addClass('selected');
		carts_num.show();
	}).mouseout(function () {
		carts.removeClass('selected');
		carts_num.hide();
	});
});
	
	/* 导航小米手机二级菜单 */
$(function() {
	var xmPhone = $(".xmPhone");
	xmPhone.hover(function() {
		$(this).find(".xmPhone-list").show();
	}, function() {
		$(this).find(".xmPhone-list").hide();
	});
});
	
	/* 左侧商品二级菜单 */
$(function() {
	var aside_nav = $(".aside-nav ul li");
		aside_nav.hover(function() {
			$(this).addClass("selected").find("div").show();
		}, function() {
			$(this).removeClass("selected").find("div").hide();
		});
});


	/* 轮播图 */
$(function() {
	var slide = $(".slide");
		$slide_nav = $(".slide .slide-nav a"),
		slide_left = $(".slide-left"),
		slide_right = $(".slide-right"),
		index = 0;
		adTimer = null,
		len = $slide_nav.length,
		btn = true;
	/* 底部圆形导航 */
	$slide_nav.click(function() {
		if(btn) {
			btn = false;
			$(this).addClass("chos").siblings().removeClass("chos");
			var index = $(this).index();
			showImg(index);
			return false;
		}
	}).eq(0).click();
	/* 显示轮播图左右按钮 */
	slide.hover(function() {
		slide_left.show();
		slide_right.show();
	}, function() {
		slide_left.hide();
		slide_right.hide();
	});
	/* 前一页 */
	slide_right.click(function() {
		if(btn) {
			btn = false;
			index++;
			if(index == len) {
				index = 0;
			}
			showImg(index);
			return false;
		}
	});
	/* 后一页 */
	slide_left.click(function() {
		if(btn) {
			btn = false;
			if(index > 0) {
			index--;
			}
			else {
				index = len - 1;
			}
			showImg(index);
			return false;
		}	
	});

	slide.hover(function() {
		if(adTimer) {
			clearInterval(adTimer);
		}
	}, function() {
		adTimer = setInterval(function() {
			showImg(index);
			index++;
			if(index == len) {
				index = 0;
			}
		}, 8000);
	}).trigger("mouseleave");
});
function showImg(index) {
	var $slide_img = $(".slide-img");
	var slide_imgWidth = $slide_img.find("li").outerWidth();
	$slide_img.animate({left: -slide_imgWidth * index}, 800, function() {
		btn = true;
	});
	$(".slide-nav a").eq(index).addClass("chos").siblings().removeClass("chos");
}

	/* 轮播图底部图片放大镜效果 */
$(function() {
	$(".slideBottom .xs-border-common").each(function(event) {
		var $img = $(this).find("img"),
			img_w = $img.width(),
			img_h = $img.height(),
			spanHTML = "<span class='imgMask' style='position: absolute; top: 0; left: 0; width: "+img_w+"px; height: "+img_h+"px;'></span>";
		$(spanHTML).appendTo(this);
	});
	$(".slideBottom").find(".imgMask").hover(function () {
		$(this).toggleClass("imgOver");
	});
});

	/* 跳转到顶部 */
$(function() {
	$(document).scroll(function() {
		if($(document).scrollTop() > 400) {
			$(".goTop").stop().show();
		}
		else {
			$(".goTop").stop().hide();
		}
	});
	/* jQuery扩展 */
		$.fn.scrollTo = function(speed) {
		// 获得body元素顶部位置
		var targetOffset = $(this).offset().top;
		$("html,body").stop().animate({scrollTop: targetOffset}, speed);
		return this;
	}
	$(".goTop").click(function() {
		$("body").scrollTo(500);
		return false;
	});
});

	/* 话费充值 */
$(function() {
	var inputPhone = $(".recharge-phone input"),
		inputText;
	inputPhone.focus(function() {
		inputText = $(this).val();
		if(inputText == this.defaultValue) {
			$(this).val("").addClass("on");
		}
	}).blur(function() {
		inputText = $(this).val();
		if(inputText == "") {
			$(this).val(this.defaultValue).removeClass("on");
		}
	});
});

	/* 动态设置用户登录遮罩层高度 */
$(function() {
	var userLogin = $(".userLogin"),
		userLoginBox = $(".userLoginBox"),
		width = $("body").width(),
		height = $("body").height(),
		widthBox = $(window).width(),
		heightBox = $(window).height(),
		loginBtn = $(".loginBtn"),
		loginClose = $(".loginClose"),
		userInput = $("#user"),
		pwdInput = $("#pwd"),
		inputText;
		userLogin.css({"width": width, "height": height});
		userLoginBox.css({
			"top": (heightBox - 350) / 2 + "px",
			"left": (widthBox - 650) / 2 + "px"});
	/* 用户点击登录显示遮罩层 */
	loginBtn.click(function() {
		userLogin.removeClass("none");
	});
	loginClose.click(function() {
		userLogin.addClass("none");
	});
	userInput.focus(function() {
		inputText = $(this).val();
		if(inputText == this.defaultValue) {
			$(this).val("");
		}
	}).blur(function() {
		inputText = $(this).val();
		if(inputText == "") {
			$(this).val(this.defaultValue);
		}
	});
	pwdInput.focus(function() {
		$(this).attr("type", "password");
		inputText = $(this).val();
		if(inputText == this.defaultValue) {
			$(this).val("");
		}
	}).blur(function() {
		inputText = $(this).val();
		if(inputText == "") {
			$(this).attr("type", "text");
			$(this).val(this.defaultValue);
		}
	});
});
/*
	搜索框获得,失去焦点动作
function inputHover() {
	var search_input = document.getElementsByClassName("search-frame-input")[0];
	search_input.onfocus = function() {
		var txt_value = search_input.innerHTML();
		
	}
}

	切换语言JavaScript
function toggleLang () {
	var lang = document.getElementById("right-menu-lang");
	var langList = document.getElementsByClassName("right-menu-langList")[0];
	lang.onmouseover = function() {
		langList.style.display = "block";
	}
	langList.onmouseover = function() {
		langList.style.display = "block";
	}
	langList.onmouseout = function() {
		langList.style.display = "none";
	}
}
window.onload = toggleLang();
*/