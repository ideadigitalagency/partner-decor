$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});

// $(document).ready(function(){
//     $('.header').addClass('removeOpacity');
// });

$(document).ready(function(){
    var element = $('.header');
    setTimeout(function(){element.addClass('removeOpacity');}, 1000);
});

$(document).ready(function(){
    var element = $('.smallHeading');
    setTimeout(function(){element.addClass('removeOpacity');}, 2000);
});

$(document).ready(function(){
    var element = $('.pictureLayout');
    setTimeout(function(){element.addClass('removeOpacity');}, 3000);
});

$(document).ready(function(){
    var element = $('.biggestHeader');
    setTimeout(function(){element.addClass('removeOpacity');}, 3000);
});


// $(document).ready(function(){
//     //var element = $('.bigHeading');
//     setTimeout(function(){element.addClass('removeOpacity');}, 4000);
// });

$(document).ready(function(){
    var element = $('.opacityButton');
    setTimeout(function(){element.addClass('removeOpacity');}, 5000);
});

const $box = $('.smallerHeading');
const $box1 = $('.introForm');
const $box2 = $('.treeImage');

$box.waypoint(function(direction){
    if (direction == 'down'){
        $box.addClass('removeOpacity')
    }
}, {offset: '44%'});

$box.waypoint(function(direction){
    if (direction == 'down'){
        setTimeout(function(){$box1.addClass('removeOpacity');}, 2000);
        //$box1.addClass('removeOpacity')
    }
}, {offset: '44%'});

$box.waypoint(function(direction){
    if (direction == 'down'){
        //$box2.addClass('removeOpacity')
        setTimeout(function(){$box2.addClass('removeOpacity');}, 3000);
    }
}, {offset: '44%'});

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

// $('#easyPaginate').jscroll({
//     autoTrigger: true,
//     contentSelector: '#easyPaginate > *'
// });

$('.page').click(function () {
    $('html, body').animate({
        scrollTop: $("#easyPaginate").offset().top - 150
    }, 2000);
    return false;
});

$('.page').click(function () {
    $('.productCardPreviewWrapper').addClass('visible')
});

// $('.wrapperWrapper').infiniteScroll({
//     // options
//     path: '.pagination__next',
//     append: '.col-4',
//     history: false,
// });