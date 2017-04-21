$(document).ready(function () {



    var w = $(window).width();
    $(window).resize(function () {
        w = $(window).width();
    });

    $('.nav-justified > .dropdown > a').click(function (e) {
        e.preventDefault();
        if (w < 992) {
            if ($(this).hasClass('active')) {
                $(this).next('.dropdown-menu').slideUp();
                $(this).removeClass('active');
            } else {
                $('.nav-justified .dropdown-menu ').slideUp();
                $('.nav-justified > li > a').removeClass('active');
                $(this).addClass('active');
                $(this).next('.dropdown-menu').slideDown();
            }
        }

    });

    $('.forgot-password').click(function (e) {
        e.preventDefault();
        $('.new-password').fadeIn(3000);
        $('.sign-in').fadeTo("slow", 0.2);
    });

    $('.create').click(function (e) {
        e.preventDefault();
        $('.create-an-account').hide();
        $('.create-an-account-form').removeClass('hidden-form');
        $('.sign-in').fadeTo("slow", 0.2);
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
            dots: false,
            responsive: {
                0: {
                    items: 1

                },
                480: {
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

        $('.nav-carousel').owlCarousel({
            navText: ['', ''],
            loop: false,
            margin: 10,
            responsiveClass: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 2

                },
                480: {
                    items: 4

                },
                768: {
                    items: 5

                },
                992: {
                    items: 7


                },
                1200: {
                    items: 10

                }
            }
        });

    }


    $('#breadcrumb .active a').click(function (e) {
        e.preventDefault();
    });

    $('.nav-carousel a').click(function (e) {
        e.preventDefault();
        $('.nav-carousel a').removeClass('active');
        $(this).addClass('active');
        var hrAtr = $(this).attr('href');
        $('.tab-pane').removeClass('active');
        $(hrAtr).addClass('active');
    });


    $('.reply').click(function (e) {
        e.preventDefault();
    });
    var replyForm = $('.form-example').html();
    $('.reply').click(function () {
        $(this).hide();
        $(this).next('.form-wrapper').append(replyForm);
    });

    $('.form-wrapper').on('click', '.close-reply', function () {
        $(this).closest('.form-wrapper').prev('.reply').show();
        $(this).closest('.form-wrapper').html("");

    });
    
    



































});


