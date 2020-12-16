$(function () {

    // this is called automatically:
    $('[data-parallax]').parallax();

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
        focusOnSelect: true,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '25%'
            }
        }]
    });
});