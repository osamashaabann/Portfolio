$(document).ready(function(){

    // Adding The sticky Class to The Header Sticky Clone
    let $header = $("header");
    let $sticky = $header.before($header.clone()).addClass("sticky");

    // Scroll function to add Our Class
    $(window).on("scroll" , function(){
        let $windowScrolly =  $(window).scrollTop();
        $("body").toggleClass("scroll" , ($windowScrolly > 350));
    });

    // Masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 120,
        fitWidth: true,
        gutter: 7
    });

    // Slick Slider
    $(".slider").slick({
        arrows: true,
        autoplay: true,
        autospeed: 1500,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        dots: false,
        centerMode: true,
        slidesToShow: 3,
        fade: false,

        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });
    
    // Smoth Scroll
    $('.menu li a[href^="#"]').on('click', function(e){
        e.preventDefault();

        let target = $(this.hash);
        if(target.length){
            $('html,body').stop().animate({
                scrollTop: target.offset().top - 65
            }, 1000);
        }
    });

    // Menu Active
    let body = $('body');
    let menuTrigger = $('.js-menu-trigger');
    let mainOverlay = $('.js-main-overlay');
    let close = $('.main-overlay').after();

    menuTrigger.on('click', function(){
        body.addClass("menu-active");
    });

    mainOverlay.on('click', function(){
        body.removeClass("menu-active");
    });

    $(".menu li a").on('click', function(){
        body.removeClass("menu-active");
    });
    
});

// Parallax Library Javascript

let scene = document.getElementById("scene");
let parallax = new Parallax (scene);

// var msnry = new Masonry( '.grid', {
//     itemSelector: '.grid-item',
//     columnWidth: 120,
    
// });