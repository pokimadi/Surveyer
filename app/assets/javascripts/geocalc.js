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
      var leg  = response.routes[0].legs[0];
      TransCalculator.autoCalc(leg);
	  var prGOstation = nearestStation(leg.start_location.lb,leg.start_location.mb, stationsPR);
	  var prGoDrive, prGoTrans, prGoCount =  2;
	  requestPr1 ={
		    origin: start,
			destination: "GO" + prGOstation.name,
		    travelMode: google.maps.TravelMode["DRIVING"]
	  };  
	  requestPr2 = {
		    origin: "GO" + prGOstation.name,
			destination: end,
		    travelMode: google.maps.TravelMode["TRANSIT"]
	  };
	  directionsService.route(requestPr1, function(response, status) {
	  	if (status == google.maps.DirectionsStatus.OK) {
	  		console.log("DRIVING TO NEAREST GO PR Station");
	  		prGoDrive = response.routes[0].legs[0];
	  		prGoCount--;
	  		if(prGoCount == 0){
	  			TransCalculator.GoPrCalc(prGoTrans, prGoDrive,prGOstation);
	  		}
	  	}

	  });;
	  directionsService.route(requestPr2, function(response, status) {
	  	if (status == google.maps.DirectionsStatus.OK) {
	  		console.log("TRANSIT to GO PR Station");
	  		prGoTrans =response.routes[0].legs[0];
	  		prGoCount--;
	  		if(prGoCount == 0){
	  			TransCalculator.GoPrCalc(prGoTrans, prGoDrive, prGOstation);
	  		}
	  	}
	  	else{
	  		console.log("I HAVE FAILED", requestPr2, response);
	  	}

	  });



	  //PR NEAREST STATAION.
	  var station = nearestStation(leg.start_location.lb,leg.start_location.mb);
      var drive, trans, count =  2;
      request2 = {
		    origin: start,
			destination: station.name,
		    travelMode: google.maps.TravelMode["DRIVING"]
	  };
	  var request3 = {
		    origin: station.name,
			destination: end,
		    travelMode: google.maps.TravelMode["TRANSIT"]
	  };
	  directionsService.route(request2, function(response, status) {
	  	if (status == google.maps.DirectionsStatus.OK) {
	  		console.log("distance to nearest Station");
	  		drive = response.routes[0].legs[0];
	  		count--;
	  		if(count == 0){
	  			TransCalculator.combCalc(trans, drive,station);
	  		}
	  	}

	  });;
	  directionsService.route(request3, function(response, status) {
	  	if (status == google.maps.DirectionsStatus.OK) {
	  		console.log("distance to nearest Station");
	  		trans =response.routes[0].legs[0];
	  		count--;
	  		if(count == 0){
	  			TransCalculator.combCalc(trans, drive, station);
	  		}
	  	}

	  });

    }
  });
}


var statCalc =  function (){
	var collection =  {};
	var routePrice = function(data){
			var first =  true;
			var before, cost = 0, added = [] ;

			data.steps.forEach(function(step){
				if (step.travel_mode == "TRANSIT"){
					var agency  =  step.transit.line.agencies[0].name;
					console.log(agency , added.indexOf(agency));
					if(!first && added.indexOf(agency) == -1){
						cost += transPrice(before, agency);
						added.push(agency);
						before = agency;
					}	
					else if(first){
						cost += startPrice(agency);
						before = agency; 
						added.push(agency);
						first = false;
					}
				}
			});
			console.log("cost is", cost, added);
			return cost;

	};

	function transCalc(data){
		console.log("DATA", data );
		var waitTime = function(){
			var elapsed = 0;
			var last = null;
			data.steps.forEach(function(step){
				console.log(step);
				if (step.travel_mode == "TRANSIT"){
					var transit = step.transit;
					if (last){
						elapsed += transit.departure_time.value.getTime() - last;
						last = transit.arrival_time.value.getTime();
					}
					else{
						console.log("T", transit.arrival_time);
						last = transit.arrival_time.value.getTime();
					}
				}
			});
			console.log("ELAPSED--", elapsed/60000);
			return elapsed/60000;
		};

		var size = data.steps.length;
		var distance =  data.distance;
		console.log("STEP", data.steps[size -1].distance.value);
		if( true){ //Not GO
			collection["3"] = routePrice(data);
			collection["7"] = collection["3"];
		}
		else{
			collection["3"] = data.steps[size -1].duration.value;
			collection["7"] = collection["3"];
		}
		if (data.steps[ size -1].travel_mode == "WALKING"){
			var wDistance = data.steps[ size -1].distance.value;
			collection["30"] = data.steps[size -1].duration.value;
			collection["29"] = data.steps[size -1].duration.value;
		}
		collection["28"] = waitTime();	
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
		else{
			collection["2"] = (collection["1"]/2).toFixed(2); 	
		}
		collection["26"] = $("#session_timeTrip").val();
		
	};

	function combCalc(trans, drive, station){
		console.log("TRANS", trans,"DRIVE", drive, "STATION", station);
		var distance =  drive.distance.value;
		var transC = routePrice(trans);
		collection["4"] = ((distance * 14.7)/ 100000.0 + transC ).toFixed(2)  ;
		console.log("COST WORKED COLLECTION",collection["4"] , transC); 
		collection["5"] = ((distance * 14.7)/ 200000.0 + transC ).toFixed(2);
		collection["6"] = collection["5"];

		console.log("COST WORKED COLLECTION",collection["5"] , transC); 
	};

	function destGO(data){
		var found = false;
		var station= null;

		data.steps.forEach(function(step){
			if (step.travel_mode == "TRANSIT"){
				var agency  =  step.transit.line.agencies[0].name;
				if(agency == "GO Transit" && !found){
					found = true;
					var point = step.end_point;
					station =  nearestStation(point.lb, point.mb, goAll);
				}
				
			}
		});
		console.log("destination Station is", station);
		return station;

	}

	function GoPrCalc(trans, drive, station){
		console.log("GO PR TRANS", trans," GO PR DRIVE", drive, "GO PR STATION", station);
		var destStation = destGO(trans);
		var PRkey ;
		var distance =  drive.distance.value;
		if(station.zone >destStation.zone ){
			PRkey  = ""+ destStation.zone +","+ station.zone;
		}
		else{
			PRkey  = ""+ station.zone +","+ destStation.zone;
		}
		console.log("PRKey is ",PRkey);
		collection["8"] =  priceMatch[PRkey];
		console.log(collection["8"]);
		collection["9"] = ((distance * 14.7)/ 100000.0 + collection["8"] ).toFixed(2);
		collection["10"] = ((distance * 14.7)/ 200000.0 + collection["8"] ).toFixed(2);
		collection["11"] = collection["10"];
		collection["12"] = collection["8"]

	};
	
	return{
		autoCalc: autoCalc,
		transCalc: transCalc,
		combCalc:combCalc,
		GoPrCalc: GoPrCalc
	};
	
	
};


//Price paid for Transfer.
transPrice = function(trans1 , trans2){
	var trasit = ["TTC", "York Region Transit", "Brampton Transit", "MiWay", "Hamilton Street Railway", "GO Transit"];
	var i = trasit.indexOf(trans1);
	var j = trasit.indexOf(trans2);
	var price = 
	[
	[0.00, 3.50, 3.25, 3.25, 2.55, 3.00],
	[3.00, 0.00, 0.00, 0.00, 0.00, 0.50],
	[3.00, 0.00, 0.00, 0.00, 0.00, 0.65],
	[3.00, 0.00, 0.00, 0.00, 0.00, 0.70],
	[3.00, 0.00, 0.00, 0.00, 0.00, 2.55],
	[3.00, 0.50, 0.65, 0.70, 2.55, 0.00]
	];
	var ret  = price[i][j];
	if (typeof(ret)== 'undefined'){
		return 0;
	}
	else {
		return ret;
	} 
};


//make Asynchronous;
startPrice = function(name){
	if(!(name == "GO Transit")){
		var transit = {"TTC": 3.00, "York Region Transit": 3.50, "Brampton Transit": 3.25, "MiWay":3.25, "Hamilton Street Railway":2.55};
		return transit[name];
	}
	else{
		console.log("GO IS HERE");
		return 4.00; // TODO Server call for price;
	}
};

goPrice = function(origin, dest, cb){
	$.get( "/goprice.json", { transit:{ "origin" : origin, "dest": dest }} )
		.done(function(data) {
			console.log(data);
			cb(data);
		});
};

var nearestStation =  function (longit, lat, stations){
	var ttc =  false;
	if (!stations){
		ttc =  true;
		var stations = {
			"Don Mills":	[43.775,	-79.346389,	5],
			"Downswview":	[43.749444,	-79.461944,	4],
			"Eglinton West":	[43.699209,	-79.435819,	6],
			"Ellsmere":	[43.766944,	-79.276389,	3],
			"Finch":	[43.780556,	-79.414722,	5],
			"Islington":	[43.645417,	-79.524444,	4.72],
			"Keele":	[43.655556,	-79.459722,	4],
			"Kennedy":	[43.7325,	-79.263611,	4.87],
			"Kipling":	[43.637583,	-79.535556,	5],
			"Lawrence East":	[43.750278,	-79.270278,	3],
			"Leslie":	[43.771389,	-79.365278,	5],
			"Victoria Park":	[43.695,	-79.288611,	4],
			"Warden":	[43.711389,	-79.279722,	4],
			"Wilson":	[43.734167,	-79.4501,	3.45],
			"York Mills":	[43.744167,	-79.406667,	7],
			"Yorkdale":	[43.724584,	-79.447321,	5]
		};
	}
	var min =  1000000000;
	var ret =  null;
	for(key in stations){
		var x = stations[key][0]- longit;
		var y = stations[key][1]- lat;
		dist  = Math.sqrt((x * x) + (y * y));
		if (min > dist ){
			min = dist;
			if(ttc){
				ret = {
					"name" :key +" Station",
					"price" : stations[key][2]
				};
			}
			else{
				ret = {
					"name" :key,
					"zone" : stations[key][2]
				};
			}	
		}

	}
	return ret;

};

