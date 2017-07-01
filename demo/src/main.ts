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
});