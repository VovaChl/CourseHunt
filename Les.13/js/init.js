$(function() {
    $(".tabs").tabs();

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        items:1
    });

    (function () {
        // .header-nav - навигация
        let nav = $('.header-nav');

        // .menu-btn - кнопка меню
        $('.menu-btn').click(function() {
            nav.toggleClass('active');
        });
    }());
});
