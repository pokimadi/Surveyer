console.log("geocalc");
var directionsService ;
$( document ).ready(function(){
	directionsService = new google.maps.DirectionsService();
});

function calcRoute(route) {
  var start = route.start;
  var end = route.end;
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode["TRANSIT"]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      console.log("RESP",response);
    }
  });
}