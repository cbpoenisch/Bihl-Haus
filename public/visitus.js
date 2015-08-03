(function() {
        "use strict";
        
        var mapOptions = {
            zoom: 15,
            center: {
               lat: 29.469665,
               lng: -98.531612
            }
        };

        // Render the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var bihlHaus = { lat: 29.469665, lng: -98.531612};

		var marker = new google.maps.Marker({
	    	position: bihlHaus,
	    	map: map
		});
	})();
