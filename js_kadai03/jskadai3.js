(function($, window) {
  $(function() {
    alert('first');
    $('#get_bank_list').on('click', function(e) {
      alert('click');
      var url = 'https://raw.githubusercontent.com/zengin-code/source-data/master/data/banks.json';

      $.getJSON(url,get,{})
        .done(function(data, status, xhr){
        alert('done');
       
        $('#result').val(result);
      }).fail(function(data, status, err) {
        alert('fail');
       
        $('#result').val(result);
      }).always(function() {
        alert('always');
      });

      alert('under ajax');
    });
    alert('last');
  });
})(jQuery, window);