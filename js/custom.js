(function($) {
    $(document).ready(function() {

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