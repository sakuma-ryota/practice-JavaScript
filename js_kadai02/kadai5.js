(function($, window) {
    $(function() {
        // 処理
        $('#index').append('<li>メソッド</li>');
        i = 0;
        $('#index').find('li').each(function() {
            var num = ($(this).text().length);
            $('#index').find('li').eq(i).append('[' + num + ']文字');
            i += 1;
        });
    });
})(jQuery, window);
