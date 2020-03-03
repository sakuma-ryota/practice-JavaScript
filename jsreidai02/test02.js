(function($, window) {
    $(function() {
        //処理
       $('#index').find('li').each(function() {
           //ループ内の処理
           alert($(this).text());
       });
    });
})(jQuery, window);