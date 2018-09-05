$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 799) {
      $('.requestCup').fadeIn();
    }else {
        $('.requestCup').fadeOut();
  }
});


$('#nav-icon3').click(function(){
    $('#menu').toggleClass('makeVisible') && $('header').toggleClass('headerAdditions') && $('body').toggleClass('disableBodyScroll');
})

$('.productCategoryList').click(function(){
    $('#productMenu').toggleClass('productMenuShow') && $('.arrowDown').toggleClass('arrowDownRotated');
})

$('.searchIcon').click(function(){
    $('.formForm').toggleClass('hide');
})



// $('.closeButton').click(function(){
//     $('#menu').removeClass('makeVisible');
// })


// $(document).ready(function(){
//     $('.header').addClass('removeOpacity');
// });

// $(document).ready(function(){
//     $('.header').addClass('removeOpacity');
// });

const $firstPoint = $('.firstPreviewRow');
const $alcoholPoint = $('.alcoholPreviewRow');
const $nonAlcoholPoint = $('.nonAlcoholPreviewRow');

$firstPoint.waypoint(function(direction){
    if (direction == 'down'){
        var elementGrey = $('.grey');
        var elementYellow = $('.yellow');
        var elementOrange = $('.orange');
        var elementGreen = $('.green');
        setTimeout(function(){elementGrey.addClass('scaleFull');}, 1000);
        setTimeout(function(){elementYellow.addClass('scaleFull');}, 2000);
        setTimeout(function(){elementOrange.addClass('scaleFull');}, 3000);
        setTimeout(function(){elementGreen.addClass('scaleFull');}, 4000);
    }
}, {offset: 750});

$alcoholPoint.waypoint(function(direction){
    if (direction == 'down'){
        var elementGrey = $('.grey');
        var elementYellow = $('.yellow');
        var elementOrange = $('.orange');
        var elementGreen = $('.green');
        setTimeout(function(){elementGrey.addClass('scaleFull');}, 1000);
        setTimeout(function(){elementYellow.addClass('scaleFull');}, 2000);
        setTimeout(function(){elementOrange.addClass('scaleFull');}, 3000);
        setTimeout(function(){elementGreen.addClass('scaleFull');}, 4000);
    }
}, {offset: 750});

$nonAlcoholPoint.waypoint(function(direction){
    if (direction == 'down'){
        var elementBlue = $('.blue');
        var elementGrey = $('.grey');
        var elementBlueDarken = $('.blueDarken');
        setTimeout(function(){elementBlue.addClass('scaleFull');}, 1000);
        setTimeout(function(){elementGrey.addClass('scaleFull');}, 2000);
        setTimeout(function(){elementBlueDarken.addClass('scaleFull');}, 3000);
    }
}, {offset: 750});

$(document).ready(function(){
    var element = $('.header');
    setTimeout(function(){element.addClass('removeOpacity');}, 1000);
});

$(document).ready(function(){
    var element = $('.bigHeading');
    setTimeout(function(){element.removeClass('hide');}, 2000);
});

$(document).ready(function(){
    var element = $('.biggestHeader');
    setTimeout(function(){element.addClass('removeOpacity');}, 3000);
});

$(document).ready(function(){
    var element = $('.pictureLayout');
    setTimeout(function(){element.addClass('removeOpacity');}, 3500);
});

$(document).ready(function(){
    var element = $('.smallHeading');
    setTimeout(function(){element.addClass('removeOpacity');}, 4500);
});

$(document).ready(function(){
    var element = $('.opacityButton');
    setTimeout(function(){element.addClass('removeOpacity');}, 5500);
});
// $(document).ready(function(){
//     //var element = $('.bigHeading');
//     setTimeout(function(){element.addClass('removeOpacity');}, 4000);
// });


const $box3 = $('.formWrapper');
const $box = $('h2.smallerHeading');
const $box15 = $('p.smallerHeading');
const $box1 = $('.introForm');
const $box2 = $('.treeImage');



$box3.waypoint(function(direction){
    if (direction == 'down'){
        setTimeout(function(){$box3.addClass('colored');}, 200);
        //$box3.addClass('colored')
    }
}, {offset: '600px'});

$box.waypoint(function(direction){
    if (direction == 'down'){
        $box.addClass('removeOpacity')
    }
}, {offset: '600px'});

$box15.waypoint(function(direction){
    if (direction == 'down'){
    setTimeout(function(){$box15.addClass('removeOpacity');}, 1000);
    }
}, {offset: '600px'});

$box1.waypoint(function(direction){
    if (direction == 'down'){
        setTimeout(function(){$box1.addClass('removeOpacity');}, 2000);
    }
}, {offset: '950px'});

$box2.waypoint(function(direction){
    if (direction == 'down'){
        setTimeout(function(){$box2.addClass('removeOpacity');}, 3000);
    }
}, {offset: '600px'});

$(function() {
    var selectedClass = "";
        $("span.pr-tabs").click(function() {
            $('span.pr-tabs.active-pr-tab').removeClass('active-pr-tab');
            $(this).addClass("active-pr-tab");
            selectedClass = $(this).attr("data-rel");
            $("#projects").fadeTo(350, 0);
            $("#projects div.all").not("." + selectedClass).fadeOut();
            setTimeout(function() {
            $("." + selectedClass).fadeIn();
            $("#projects").fadeTo(750, 1);
        }, 1000);
    });
});


$('#easyPaginate').easyPaginate({
    paginateElement: 'div.productCardPreviewWrapper',
    elementsPerPage: 24
});

$('.page').click(function () {
    $('html, body').animate({
        scrollTop: $("#easyPaginate").offset().top - 150
    }, 2000);
    return false;
});

$('.page').click(function () {
    $('.productCardPreviewWrapper').addClass('visible')
});