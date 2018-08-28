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
    //var element = $('.bigHeading');
    setTimeout(function(){element.addClass('removeOpacity');}, 4000);
});

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

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    slidesPerColumn: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});