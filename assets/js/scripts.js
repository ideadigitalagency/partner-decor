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

/* click events */

$('#nav-icon3').click(function(){
    if ($('#productMenu').is('.productMenuShow')) {
        $('#productMenu').toggleClass('productMenuShow') && $('.arrowDown').toggleClass('arrowDownRotated');
    }
    $('#menu').toggleClass('makeVisible') && $('header').toggleClass('headerAdditions') && $('body').toggleClass('disableBodyScroll');
})

$('.productCategoryList').click(function(){
    $('#productMenu').toggleClass('productMenuShow') && $('.arrowDown').toggleClass('arrowDownRotated');
})

$('.searchIcon').click(function(){
    $('.header form').toggleClass('show');
})

$('.mapSwitcher').click(function(){
    $('.mapSwitcher').toggleClass('green');
})

$('.close-button-menu').click(function(){
    $('#productMenu').toggleClass('productMenuShow') && $('.arrowDown').toggleClass('arrowDownRotated');
})

/* end of click events */

const $firstPoint = $('.firstPreviewRow');
const $secondPoint = $('.secondPreviewRow');
const $alcoholPoint = $('.alcoholPreviewRow');
const $nonAlcoholPoint = $('.nonAlcoholPreviewRow');

$firstPoint.waypoint(function(direction){
    if (direction == 'down'){
        var elementGrey = $('.greyFirst');
        var elementYellow = $('.yellowFirst');
        var elementOrange = $('.orangeFirst');
        var elementGreen = $('.greenFirst');
        setTimeout(function(){elementGrey.addClass('scaleFull');}, 0000);
        setTimeout(function(){elementYellow.addClass('scaleFull');}, 1000);
        setTimeout(function(){elementOrange.addClass('scaleFull');}, 2000);
        setTimeout(function(){elementGreen.addClass('scaleFull');}, 3000);
    }
}, {offset: '75%'});

$secondPoint.waypoint(function(direction){
    if (direction == 'down'){
        var elementGrey = $('.greySecond');
        var elementYellow = $('.yellowSecond');
        var elementOrange = $('.orangeSecond');
        var elementGreen = $('.greenSecond');
        setTimeout(function(){elementGrey.addClass('scaleFull');}, 0000);
        setTimeout(function(){elementYellow.addClass('scaleFull');}, 1000);
        setTimeout(function(){elementOrange.addClass('scaleFull');}, 2000);
        setTimeout(function(){elementGreen.addClass('scaleFull');}, 3000);
    }
}, {offset: '50%'});

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
}, {offset: '85%'});

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

const $cases = $('#case');

$cases.waypoint(function(direction){
    if (direction == 'down'){
        var caseWrapper = $('.caseWrapper');
        caseWrapper.addClass('normalTransform');
    }
}, {offset:'50%'});

$(document).ready(function(){
    $('.smallHeading').addClass('normalTransform') && $('.pictureLayout').addClass('normalTransform');
});


$(document).ready(function(){
    $('#video-background').addClass('normalTransform');
});

$(document).ready(function(){
    var element = $('.bigHeading span');
    setTimeout(function(){element.addClass('toTopHeader');}, 1250);
});

// $(document).ready(function(){
//     var element = $('.modalButton');
//     setTimeout(function(){element.addClass('toTopHeader');}, 1250);
// });

$(document).ready(function(){
    var element = $('#intro .buttonWrapper');
    setTimeout(function(){element.addClass('go');}, 2250);
});

$(document).ready(function(){
    var element = $('#introVideo .buttonWrapper');
    setTimeout(function(){element.addClass('goSmaller');}, 2250);
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
        setTimeout(function(){$box2.addClass('removeOpacity');}, 2000);
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

$(function () {
    $(".showMoreProduct").slice(0, 6).show();
    $(".showMoreProductButton").on('click', function (e) {
        e.preventDefault();
        $(".showMoreProduct:hidden").slice(0, 6).slideDown();
        if ($(".showMoreProduct:hidden").length == 0) {
            $(".showMoreProductButton").hide();
        }
    });
    if ($(".showMoreProduct:hidden").length == 0) {
        $(".showMoreProductButton").hide();
    }
});
