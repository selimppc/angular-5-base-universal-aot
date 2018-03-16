$(window).on('load', function(e) {
    $("#pageloader").fadeOut("slow");
});
(function($, window, document, undefined) {
    'use strict';

    //Script for sticky navbar
    if ($(window).width() >= 768) {

        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $('.navbar-scroll').addClass('--show');
            } else {
                $('.navbar-scroll').removeClass('--show');
            }
        });
    }

    $(function(){
        var navHeight = $('.fixed-top').outerHeight();
        $('.search-modal').fadeOut();
        $('.search-toggler').on('click', function(event){
            event.stopPropagation();
            $(this).closest('body').toggleClass('search-modal-open');
            $('.search-modal').fadeToggle();
            $('.search-overlay').fadeToggle();
        });
        $(".search-modal").click(function(event) {
          event.stopPropagation();
        });

        $("body").click(function() {
          $(".search-modal").fadeOut();
          $(".search-overlay").fadeOut();
          $(".search-modal").closest('body').removeClass('search-modal-open');
        });

        $("body").keypress(function(key){
            if (key.which == 13){
                $(".search-overlay").fadeOut();
                $('body').removeClass('search-modal-open');
            }
        });
        $('.btn-search').on('click', function(){
            $(".search-overlay").fadeOut();
            $('body').removeClass('search-modal-open');
        });
    });

    $(function(){
        var navAcH = $('.nav-actions').outerWidth();


        if ($(window).width() >= 992) {
            $('.nav-main-centered').find('.navbar-brand').css({"width": navAcH});
        }
    });
    $('.image-popup').magnificPopup({type:'image'});

    $('.media-widget img').magnificPopup({type:'image'});

    $(function() {
      $('#selectContact').change(function(){
        $('.keep-changed').hide();
        $('#' + $(this).val()).show();
      });
    });



})(jQuery, window, document);
