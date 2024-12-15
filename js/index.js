$(function () {
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
});
