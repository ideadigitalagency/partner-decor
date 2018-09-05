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