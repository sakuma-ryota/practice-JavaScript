(function($, window) {
    $(function() {
        //処理
        $('h2').show();
        $('#index').find('li').eq(0).hide()
       $('#index').find('li').each(function() {
           //ループ内の処理
           alert($(this).text());
       });
    });
})(jQuery, window);