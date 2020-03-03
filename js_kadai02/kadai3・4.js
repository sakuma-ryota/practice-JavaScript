(function($, window) {
    $(function() {
        // 処理
        $('#index').append('<li>メソッド</li>');
        $('#index').find('li').each(function() {
            alert($(this).text().length);
        });   
    });
})(jQuery, window);
