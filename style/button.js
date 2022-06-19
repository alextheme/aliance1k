jQuery(function() {
    "use strict";

    // Button Go Up
    const buttonGoTop = $(`<a href="#" id="go-top" title="Вверх"></a>`);
    $('body').append(buttonGoTop);

    $(function() {
        $.fn.scrollToTop = function() {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
            const scrollDiv = $(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function() {
                $("html, body").animate({scrollTop: 0}, "slow");
            });
        }
    });

    $(function() {
        buttonGoTop.scrollToTop();
    }); // end Button Go Up
});

