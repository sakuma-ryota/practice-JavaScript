(function($, window) {
    $(function() {
        // ここに処理を書きます
        $('#btn').on('click', function() {
            $('#zip1').jpostal({
                postcode : [
                    '#zip1',
                    '#zip2'
                ],
                address : {
                    '#pref'  : '%3',
                    '#city'  : '%4',
                    '#street'  : '%5'
                }
            });
        });
    });
  })(jQuery, window);