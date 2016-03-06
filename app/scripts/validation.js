$(document).ready(function() {

	$('#form').validate({

		rules: {

			email: {
				required: true
			},

			password: {
				required: true
			},

			selectpicker: {
				required: true
			},

		}


	});
});