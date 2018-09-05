$(document).ready(function(){
    $('.singleProduct')
        .wrap('<span style="display:inline-block"></span>')
        .css('display', 'block')
        .parent()
        .zoom();
});