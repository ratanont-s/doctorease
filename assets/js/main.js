$(function () {

    $(".about-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: '.about-nav'
    });
    $(".about-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.about-for',
        focusOnSelect: true
    });
});