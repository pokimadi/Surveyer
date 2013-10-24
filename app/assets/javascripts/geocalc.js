console.log("geocalc");
var directionsService ;
var TransCalculator;
//var AutoCalculator;
$( document ).ready(function(){
	directionsService = new google.maps.DirectionsService();
});

function calcRoute(route) {
  var start = route.start;
  var end = route.end;
  TransCalculator = statCalc();
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode["TRANSIT"]
  };
 
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      console.log("RESP",response);
      TransCalculator.transCalc(response.routes[0].legs[0]);
    }
  });
  var request2 = {
		    origin: start,
		    destination: end,
		    travelMode: google.maps.TravelMode["DRIVING"]
		  };
  console.log("1",request, "2", request2);
  directionsService.route(request2, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      console.log(" Auto RESP",response);
      TransCalculator.autoCalc(response.routes[0].legs[0]);
    }
  });
}


var statCalc =  function (){
	var collection =  {};
	function transCalc(data){
		console.log("DATA", data );
		var distance =  data.distance;
		if(data.steps[-1].travel_mode = "WALKING"){
			var wDistance = data.steps[-1].distance.value;
			collection["30"] = data.steps[-1].duration.value;
			collection["29"] = data.steps[-1].duration.value;
		}
		
	};
	
	function autoCalc(data){
		console.log("DATA", data );
		var distance =  data.distance.value;
		collection["1"] = ((distance * 14.7)/ 100000.0).toFixed(2);
		console.log(collection["1"]);  
		var numpool = $("#session_numMain").val();
		if(numpool !="" && numpool !="0"){
			numpool = parseInt(numpool);
			collection["2"] = (collection["1"]/numpool).toFixed(2); 
		}
		collection["26"] = $("#session_timeTrip").val();
		
	}
	
	return{
		autoCalc: autoCalc,
		transCalc: transCalc
	};
	
	
};


//Price paid for Transfer.
transPrice = function(trans1 , trans2){
	var trasit = ["TTC", "York Region Transit", "York Region Transit", "Brampton Transit", "MiWay", "Hamilton Street Railway", "GO Transit"];
	var i = trasit.indexOf(trans1);
	var j = trasit.indexOf(trans2);
	var price = 
	[
	[0.00, 3.50, 0.00, 3.25, 3.25, 2.55, 3.00],
	[3.00, 0.00, 1.00, 0.00, 0.00, 0.00, 0.50],
	[3.00, 1.00, 0.00, 0.00, 0.00, 0.00, 0.50],
	[3.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.65],
	[3.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.70],
	[3.00, 0.00, 0.00 ,0.00, 0.00, 0.00, 2.55],
	[3.00, 0.50, 0.50, 0.65, 0.70, 2.55, 0.00]
	];
	var ret  = price[i][j];
	if (typeof(ret)== 'undefined'){
		return 0;
	}
	else {
		return ret;
	} 
};

