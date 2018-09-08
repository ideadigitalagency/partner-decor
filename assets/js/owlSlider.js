$('.reviewSliderWrapper').owlCarousel({
    center: true,
    items:1,
    dots: false,
    touchDrag: true,
    loop:true,
    nav:true,
    navText : ['<div class="control controlLeft"></div>','<div class="control controlRight"></div>']
});

$('.caseGalleryWrapper').owlCarousel({
    center: true,
    items:1,
    dots: true,
    touchDrag: true,
    loop:true
});

$('.sliderWithThumb').owlCarousel({
    items: 1,
    dots: false,
    thumbs: true,
    thumbsPrerendered: true,
    loop:true
});

$('.aboutUsRepliesWrapper').owlCarousel({
    items: 1,
    center: true,
    dots: false,
    touchDrag: true,
    loop:true,
    nav:true,
    navText : ['<div class="control controlLeft"></div>','<div class="control controlRight"></div>']
});

$('.aboutUsVideoRepliesWrapper').owlCarousel({
    items: 1,
    center: true,
    dots: false,
    touchDrag: false,
    loop:true,
    nav:true,
    navText : ['<div class="control controlLeft"></div>','<div class="control controlRight"></div>']
}); 