(function($, window) {
    $(function() {
        //処理
        $('body').on('click', function() {
            $('#click_me').css({'color' : 'red'});
        });
    });
}) (jQuery, window);