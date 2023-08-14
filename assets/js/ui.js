$(document).ready(function(){

    setTimeout(function(){
        textEffect();
    }, 800);

    // leftmenu
    $("#btnMenuOpen").click(function(){     
        $("#btnMenuOpen").addClass("open");
        $("#leftmenu").fadeIn("400").addClass("active");
        $("body").addClass("menuOpened");
        return false;
    });
    $("#btnMenuclose").click(function(){  
        $("#btnMenuOpen").removeClass("open");
        $("#leftmenu").removeClass("active");
        $("body").removeClass("menuOpened");
        return false;
    });

    function textEffect(){
        $(".textEffect").each(function(){
            let $this = $(this);
            let start_pos = "top bottom";
            let end_pos = "bottom top";

            ScrollTrigger.create({
                trigger: $this,
                start: start_pos,
                end: end_pos,
                onEnter: function(){
                    $this.addClass("active");
                },onLeave: function(){
                    $this.removeClass("active");
                },onEnterBack: function(){
                    $this.addClass("active");
                },onLeaveBack: function(){
                    $this.removeClass("active");
                }
            });
        });
    }
    
    // schedule Slider
    let scheduleSliderCheck = $(".scheduleSlider");
    if (scheduleSliderCheck.length) {
        var swiper = new Swiper(".scheduleSlider", {
            loop: false,
            slidesPerView: "auto", // 보여줄 개수
            spaceBetween: 24, // 슬라이드 사이 여백
            freeMode: false,
            //slidesOffsetBefore: 640, // 첫번째 여백
            //slidesOffsetAfter: 640, // 두번째 여백
            allowTouchMove: true,
            initialSlide: 0, // 시작 위치 (0부터 시작)
            scrollbar : {
                el : '.swiper-scrollbar',
                dragSize: 48,
                draggable: true,
            },
        });
    }
});

// 진입시 .start 추가
var isVisible = false;

$(window).on("scroll",function() {
    if ($(".scheduleSection").length) {
        if (checkVisible($(".scheduleSection"))&&!isVisible){
            setTimeout(function(){
                $(".scheduleSection").addClass("start");
            }, 1000);
            isVisible = true;
            return true;
        }
    }
});
function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(),
        wscrolltop = $(window).scrollTop(),
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + wscrolltop)) && (y > (wscrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + wscrolltop)));
}

function urlCopy() {
    // url 복사
    const inputUrl = document.getElementById("inputUrl");
    window.navigator.clipboard.writeText(inputUrl.value);

    var x = document.getElementById("urlToast")
    x.className += "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function completedToast() {
    var x = document.getElementById("completedToast")
    x.className += "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
function scheduleToast() {
    var x = document.getElementById("scheduleToast")
    x.className += "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

// ios 사파리 height
const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
};
window.addEventListener('resize', setVh);
setVh();

//스크롤 on/off
function scrollDisable(){
    $("html, body").addClass("scrollOff");
}
function scrollAble(){
    $("html, body").removeClass("scrollOff");
}