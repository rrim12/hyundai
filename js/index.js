$(function () {
    Splitting();

    // 햄버거bar, 사이드메뉴
    $(".wrap").on("click", function () {
        $(".up").toggleClass("on");
        $(".down").toggleClass("on-d");
        $(".side_menu").toggleClass("side_on");
        $(".bar").toggleClass("wh_on");
    });
    //헤더 스크롤시 바뀜
    $(window).on("scroll", function () {
        $("header").addClass("bg_on");
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

    // more 버튼
    $(".more").on("mouseenter", function () {
        $(this).children(".fullColor").stop().animate({ width: "100%" }, 200);
        $(this).children(".more_txt").addClass("on_wh");
    });
    $(".more").on("mouseleave", function () {
        $(this).children(".fullColor").stop().animate({ width: "0%" }, 200);
        $(this).children(".more_txt").removeClass("on_wh");
    });

    //스크롤탑 이동버튼
    $(".top_Butt").on("click", function () {
        $("html, body").stop().animate({ scrollTop: "0" });
    });
});
