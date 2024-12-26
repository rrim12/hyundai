$(function () {
    Splitting();

    // 햄버거bar, 사이드메뉴
    $(".wrap").on("click", function () {
        $(".up").toggleClass("on");
        $(".down").toggleClass("on-d");
        $(".side_menu").toggleClass("side_on");
        $(".bar").toggleClass("wh_on");
    });

    //헤더 호버시 동그라미 나오게
    $(".menu > li").on("mouseenter", function () {
        $(this).children(".circle").addClass("circle_mov");
    });
    $(".menu > li").on("mouseleave", function () {
        $(this).children(".circle").removeClass("circle_mov");
    });
    $(".icon_wrap > li").on("mouseenter", function () {
        $(this).children(".circle2").addClass("icon_mov");
    });
    $(".icon_wrap > li").on("mouseleave", function () {
        $(this).children(".circle2").removeClass("icon_mov");
    });
});
