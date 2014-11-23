// http://toddmotto.com/flawless-clickable-drop-down-navigation/を参照

var ready;

ready = function () {
	$('.dropmenu > ul').toggleClass('no-js js');
	$('.dropmenu .js ul').hide();
	$('.dropmenu .js').click(function(e) {
		$('.dropmenu .js ul').slideToggle(200);
		$('.clicker').toggleClass('active');
		e.stopPropagation;
	});
	$(document).click(function() {
		if ($('.dropmenu .js ul').is(':visible')) {
			$('.dropmenu .js ul', this).slideUp();
			$('.clicker').removeClass('active');
		}
	});
}:

$(document).ready(ready)
$(document).on('page:load', ready);