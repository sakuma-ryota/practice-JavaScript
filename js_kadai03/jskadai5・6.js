$(window).ready( function() {
	$('#btn').jpostal({
		click : '#btn',
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
})(jQuery, window);