$(document).ready(function() {
    $('.timer').viewportChecker({
    	callbackFunction: function(elem, action){

		    $('#circle1').circleProgress({
		        value: 0.9,
		        size: 90,
		        fill: {
		            gradient: ["green", "orange"]
		        }
		    }).on('circle-animation-progress', function(event, progress) {
		    	$(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
			});

			$('#circle2').circleProgress({
		        value: 0.9,
		        size: 90,
		        fill: {
		            gradient: ["green", "orange"]
		        }
		    }).on('circle-animation-progress', function(event, progress) {
		    	$(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
			});

			$('#circle3').circleProgress({
		        value: 0.5,
		        size: 90,
		        fill: {
		            gradient: ["green", "orange"]
		        }
		    }).on('circle-animation-progress', function(event, progress) {
		    	$(this).find('strong').html(parseInt(50 * progress) + '<i>%</i>');
			});

			$('#circle4').circleProgress({
		        value: 0.6,
		        size: 90,
		        fill: {
		            gradient: ["green", "orange"]
		        }
		    }).on('circle-animation-progress', function(event, progress) {
		    	$(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
			});
	    },
    });
});