(function($, window) {
    $(function() {
        //処理
        $('body').on('click', function() {
            $(this).css({'color' : 'red'});
        });
    });
}) (jQuery, window);