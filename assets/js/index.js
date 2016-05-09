/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    var contador = 1;
    $('.bt-menu').click(function(e){
          e.preventDefault();
        if(contador == 1){
            $('.nav').animate({
                right: '0'
            });
            contador = 0;
        }else {
            contador = 1;
            $('.nav').animate({
                right: '-100%'
            });
        }
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };


    /*var menu = $('.menu');
    var cuadro_offset = menu.offset();*/
    var posicion = 100;
    var posicionActual, posicionNueva = 0;
    $(window).on('scroll', function() {
        if($(window).scrollTop() > posicion) {
            //$(".menu").css("background", "rgba(28,28,28,11)");
            $(".menu").fadeOut();
        }else{
            $(".menu").fadeIn();
            //$(".menu").css("background", "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0) 100%)");
        }
        /*posicionActual = $(window).scrollTop();
        if(posicionActual != 0){
            if(posicionActual < posicionNueva){
                $(".menu").fadeIn();//muestra menu
            }else{
                $(".menu").fadeOut();//oculta menu
            }
        }
        posicionNueva = posicionActual*/
    });

})(jQuery);
