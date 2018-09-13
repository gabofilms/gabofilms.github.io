(function($) {
    $(document).ready(function() {

    /* IF YOU WANT TO APPLY SOME BASIC JQUERY TO REMOVE THE VIDEO BACKGROUND ON A SPECIFIC VIEWPORT MANUALLY

     var is_mobile = false;

    if( $('.player').css('display')=='none') {
        is_mobile = true;       
    }
    if (is_mobile == true) {
        //Conditional script here
        $('.big-background, .small-background-section').addClass('big-background-default-image');
    }else{
        $(".player").mb_YTPlayer(); 
    }

    });
    */
    myPlayer = $(".player").mb_YTPlayer({
            onReady: function( player ) {
                           var filters = {
                              grayscale: 20,
                           }
                           myPlayer.YTPApplyFilters(filters)
                           $(".pattern").removeClass("pattern");
            }
        });
    });
})(jQuery);