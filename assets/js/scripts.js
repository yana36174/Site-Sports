$('.owl-carousel').owlCarousel({
    loop: true,
    // margin: 40,
    nav: true,
    dots: true,
    responsiveClass:true,
    responsive:{
        360 :{
            items: 1,
            margin: 0,
            center: true,
        },
        1200:{
            items:3,
            margin: 40,
        }
    }
})