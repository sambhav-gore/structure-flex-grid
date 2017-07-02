// common styles
import './common/styles.scss';

import './common/dom-manipulations';

import * as $ from 'jquery';

$(() => {

    // $("<div class='message'>")
    //     .text("Message from jQuery")
    //     .appendTo("body");
    //


    $(".gist-toggler").click(function() {
        let existingText = $(this).text();
        let newText = existingText === 'Show markup'? 'Hide markup' : 'Show markup';
        $(this).closest('.gist__container').find('.gist__wrapper').toggle();
        $(this).text(newText);
    });

    $(".anchor-link").click(function() {
       let targetAnchor = $(this).attr('data-target');
        scrollToAnchor(targetAnchor);
    });

    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top - 80},'fast');
    }

    var sideMenu = $(".side-menu");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 385) {
            sideMenu.addClass("side-menu--fixed");
        } else {
            sideMenu.removeClass("side-menu--fixed");
        }
    });
});