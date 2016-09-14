var map;
function initMap(){
	var myLatLng = {lat: 5.325111, lng:-4.001951 };
  	// Create a map object and specify the DOM element for display.
  	map = new google.maps.Map(document.getElementById('map'), {
    	center: myLatLng,
    	scrollwheel: false,
    	zoom: 17
  	});

  	// Create a marker and set its position.
  	var marker = new google.maps.Marker({
    	map: map,
    	position: myLatLng,
    	title: 'YESSA TECHNOLOGIES'
  	});

}