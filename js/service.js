$(function () {
    // 햄버거bar, 사이드메뉴
    $(".wrap").on("click", function () {
        $(".up").toggleClass("on");
        $(".down").toggleClass("on-d");
        $(".side_menu").toggleClass("side_on");
        $(".bar").toggleClass("wh_on");
    });
});
