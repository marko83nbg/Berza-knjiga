$(document).ready(function () {

    var w = $(window).width();
    $(window).resize(function () {
        w = $(window).width();
    });

    $('.navbar-nav > .dropdown > a').click(function (e) {
        e.preventDefault();
        if (w < 768) {
            if ($(this).hasClass('active')) {
                $(this).next('.dropdown-menu').slideUp();
                $(this).removeClass('active');
            } else {
                $('.navbar-nav .dropdown-menu ').slideUp();
                $('.navbar-nav > li > a').removeClass('active');
                $(this).addClass('active');
                $(this).next('.dropdown-menu').slideDown();
            }
        }

    });

//MAIN SLIDER ON INDEX PAGE
    $('.bxslider').bxSlider({
        auto: false
    });


// 5 STAR RATIO 
    $(".ratio").rateYo({
        rating: 3.6,
        starWidth: "20px",
        ratedFill: "#066083"

    });

    //OWL CAROUSEL SLIDER
    if ($('.owl-carousel').length > 0) {
        //CALL ON INDEX PAGE IN TABS
        $('.tab-carousel').owlCarousel({
            navText: ['', ''],
            loop: false,
            margin: 10,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 2

                },
                768: {
                    items: 3

                },
                992: {
                    items: 5


                },
                1200: {
                    items: 6

                }
            }
        });

        /*NEXT OWL CAROUSEL*/
        
        
        




    }


































});


