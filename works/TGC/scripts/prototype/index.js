/* 轮播图淡入淡出
-------------------------------------------- */

function slideBannerStart() {
  var middleSlide = document.getElementById("middle-slide");
  var middleSlideNav = document.getElementById("middle-slide-nav");
  var middleSlideNav_ul = middleSlideNav.getElementsByTagName("ul")[0];
  var middleSlideNav_li = middleSlideNav_ul.getElementsByTagName("li");
  var middleSlideBanner = document.getElementById("middle-slideBanner");
  var middleSlideBanner_ul = middleSlideBanner.getElementsByTagName("ul")[0];
  var middleSlideBanner_li = middleSlideBanner_ul.getElementsByTagName("li");
  var timer = null;
  var iNow = 0;

  for(var i=1; i<middleSlideBanner_li.length; i++) {
    middleSlideBanner_li[i].style.opacity = 0;
  }

  for(var i=0; i<middleSlideNav_li.length; i++) {
    middleSlideNav_li[i].index = i;
    middleSlideNav_li[i].onmouseover = function() {
      iNow = this.index;
      for(var i=0; i<middleSlideNav_li.length; i++) {
        middleSlideNav_li[i].className = "";
        startMove(middleSlideBanner_li[i], {opacity: 0}, function() {
          this.style.display = "none";
        });
      }
      this.className = "on";
      middleSlideBanner_li[this.index].style.display = "block";
      startMove(middleSlideBanner_li[this.index], {opacity: 100});
    };
  }

  timer = setInterval(toRun, 6000);

  middleSlide.onmouseover = function() {
    clearInterval(timer);
  }

  middleSlide.onmouseout = function() {
    timer = setInterval(toRun, 6000);
  }

  function toRun() {
    if(iNow == middleSlideNav_li.length-1) {
      iNow = 0;
    }
    else {
      iNow++;
    }
    for(var i=0; i<middleSlideNav_li.length; i++) {
        middleSlideNav_li[i].className = "";
        startMove(middleSlideBanner_li[i], {opacity: 0}, function() {
          this.style.display = "none";
        });
    }
    middleSlideNav_li[iNow].className = "on";
    middleSlideBanner_li[iNow].style.display = "block";
    startMove(middleSlideBanner_li[iNow], {opacity: 100});
  }
};

slideBannerStart();

/* 跳转顶部
-------------------------------------------- */

function returnTop() {
  var timer = null;
  var returnTopBtn = document.getElementById("returnTop");

  window.onscroll = function() {
    var scrollTopValue = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTopValue > 500) {
      returnTopBtn.style.display = "block";
    }
    else {
      returnTopBtn.style.display = "none";
    }
  }

  returnTopBtn.onclick = function() {
    timer = setInterval(returnTopMove, 10);
  }

  function returnTopMove() {
    var scrollTopValue = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTopValue == 0) {
      clearInterval(timer);
    }
    window.scrollBy(0, -80);
  }

}

returnTop();

/* 动画过渡效果
-------------------------------------------- */

function startMove(obj, json, endFn) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function() {
    var bBtn = true;
    for (var attr in json) {
      var iCur = 0;
      if (attr == 'opacity') {
        if (Math.round(parseFloat(getStyle(obj, attr)) * 100) == 0) {
          iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
          iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100) || 100;
        }
      } else {
        iCur = parseInt(getStyle(obj, attr)) || 0;
      }
      var iSpeed = (json[attr] - iCur) / 8;
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      if (iCur != json[attr]) {
        bBtn = false;
      }
      if (attr == 'opacity') {
        obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
        obj.style.opacity = (iCur + iSpeed) / 100;
      } else {
        obj.style[attr] = iCur + iSpeed + 'px';
      }
    }
    if (bBtn) {
      clearInterval(obj.timer);
      if (endFn) {
        endFn.call(obj);
      }
    }
  }, 30);
}

function getStyle(obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } 
  else {
    return getComputedStyle(obj, false)[attr];
  }
}