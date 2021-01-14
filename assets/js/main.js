$(function () {

    // this is called automatically:
    $('[data-parallax]').parallax();

    $(".about-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        draggable: false,
        asNavFor: '.about-nav',
        touchMove:false,
        swipe: false,
    });
    $(".about-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.about-for',
        focusOnSelect: true,
        arrows: false,
        infinite: false,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '25%'
            }
        }]
    });
    $('#priceTable').DataTable({
        paging:   false,
        ordering: false,
        info:     false,
        searching: false,
        scrollX:        true,
        scrollCollapse: true,
        fixedColumns:   true,
        columnDefs: [
            { width: "18%", targets: 1 },
            { width: "18%", targets: 2 },
            { width: "18%", targets: 3 },
            { width: "18%", targets: 4 },
          ]
    });
});