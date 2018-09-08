var wpcf7Elm = document.querySelector( 'div#modalForm div.wpcf7' );
wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
    jQuery("#modalForm").find('.modal-heading').toggleClass('hidden') && jQuery("#modalForm").find('.modal-sub-heading').toggleClass('hidden') && jQuery("#modalForm").find('.wpcf7').hide();
}, false );

var wpcf7Elm = document.querySelector( 'div.formTemplateModal div.wpcf7' );
wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
    jQuery("div.formTemplateModal").find('.modal-heading').toggleClass('hidden') && jQuery("div.formTemplateModal").find('.modal-sub-heading').toggleClass('hidden') && jQuery("div.formTemplateModal").find('.wpcf7').hide();
}, false );

var wpcf7ElmAnother = document.querySelector( 'section#form div.wpcf7' );
wpcf7ElmAnother.addEventListener( 'wpcf7mailsent', function( event ) {
    jQuery("#modalFormGreeting").modal();
}, false );