console.log("geocalc");
var directionsService ;
var TransCalculator;
//var AutoCalculator;
$( document ).ready(function(){
	directionsService = new google.maps.DirectionsService();
});

function goRoute(steps){
	var ret = true;
	steps.forEach(function(step){
		if (step.travel_mode == "TRANSIT" && step.transit.line.agencies[0].name == "GO Transit"){
			ret = false;
		}
	});
	return ret;
};

function goAndTTC(steps){
	var lt = false, go =false;
	steps.forEach(function(step){
		if (step.travel_mode == "TRANSIT" && lt && step.transit.line.agencies[0].name == "GO Transit"){
			go = true;
		}
		else if (step.travel_mode == "TRANSIT" && step.transit.line.agencies[0].name != "GO Transit"){
			lt = true;
		}

	});
	return (go&&lt);
} 
function noGostation(data){
	var ret =  null;
	var found = false;
	data.forEach(function(route){
		if(!found && goRoute(route.legs[0].steps)){
			found = true;
			ret =  route;
		}
	});
	return ret;
};

function goTTCStation(data){
	var ret =  null;
	var found = false;
	data.forEach(function(route){
		if(!found && goAndTTC(route.legs[0].steps)){
			found = true;
			ret =  route;
		}
	});
	return ret;
};

function calcRoute(route) {
	var start = route.start;
	var end = route.end;
	
	TransCalculator = statCalc();
	var request = {
		origin: start,
		destination: end,
		//arrival_time: 
		travelMode: google.maps.TravelMode["TRANSIT"],
		provideRouteAlternatives:true
	};
 
	directionsService.route(request, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
		  console.log("RESP",response);
		  var noGO = noGostation(response.routes);
		  var goTTC = goTTCStation(response.routes);
		  console.log("Local to GO ROUTE", goTTC, noGO);
		  if(noGO){
		  	TransCalculator.transCalc(noGO.legs[0]);
		  }
		   if (goTTC){
		   	console.log("SENDING");
		  	TransCalculator.GoTtcCalc(goTTC.legs[0]);
		  }
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
      
			//GO STATION
			var GOstation = nearestStation(leg.start_location.lat(),leg.start_location.lng(), goAll);
			var GoDrive, GoTrans, GoCount =  2;
			console.log("BBBBBBBBB", GOstation,"BBBBBBBBB", leg.start_location.lat(),"BBBBBBBBB", leg.start_location.lng(), "mfmgmrkr", leg, "DONE!");
			requestGo1 = {
			    origin: start,
				destination:  GOstation.name,
			    travelMode: google.maps.TravelMode["WALKING"]
			};  
			requestGo2 = {
			    origin:  GOstation.name,
				destination: end,
			    travelMode: google.maps.TravelMode["TRANSIT"]
			};
	  
			var funcGO1 = function(response, status) {
				console.log("GO REQ1", response);
				if (status == google.maps.DirectionsStatus.OK) {
					console.log("DRIVING TO NEAREST GO Station");
					GoDrive = response.routes[0].legs[0];
					GoCount--;
					if(GoCount == 0){
						TransCalculator.GoCalc(GoTrans, GoDrive, GOstation);
					}
				}
				else if(status == "OVER_QUERY_LIMIT"){
					setTimeout(function() {
						directionsService.route(requestPr1, funcGO1 );
					},1000);
				}
			};
	  		directionsService.route(requestGo1,funcGO1);


			var funcGO2 =  function(response, status) {
				console.log("GO REQ2", response);
				if (status == google.maps.DirectionsStatus.OK) {
					console.log("TRANSIT to GO Station");
					GoTrans =response.routes[0].legs[0];
					GoCount--;
					if (GoCount == 0){
						TransCalculator.GoCalc(GoTrans, GoDrive, GOstation);
					}
				}
				else if(status == "OVER_QUERY_LIMIT"){
					setTimeout(function() {
						directionsService.route(requestPr1, funcGO2 );
					},1000);
				}
			};
	  		directionsService.route(requestGo2, funcGO2 );
      
			//------->
			//PR GO STATION.
			var prGOstation = nearestStation(leg.start_location.lat(),leg.start_location.lng(), stationsPR);
			var prGoDrive, prGoTrans, prGoCount =  2;
			requestPr1 ={
			    origin: start,
				destination: "GO " + prGOstation.name +", Ontario ,Canada",
			    travelMode: google.maps.TravelMode["DRIVING"]
			};  
			requestPr2 = {
			    origin:  prGOstation.name +", Ontario ,Canada",
				destination: "Toronto, Ontario",
			    travelMode: google.maps.TravelMode["TRANSIT"]
			};
	  
			var funcPr1 = function(response, status) {
				console.log("PR response", response);
				if (status == google.maps.DirectionsStatus.OK) {
					console.log("DRIVING TO NEAREST GO PR Station");
					prGoDrive = response.routes[0].legs[0];
					prGoCount--;
					if(prGoCount == 0){
						TransCalculator.GoPrCalc(prGoTrans, prGoDrive,prGOstation);
					}
				}
				else if(status == "OVER_QUERY_LIMIT"){
					setTimeout(function() {
						directionsService.route(requestPr1, funcPr1 );
					},1000);
				}
			};
	 		directionsService.route(requestPr1, funcPr1 );
	  
	 
			var funcPr2 = function(response, status) {
				console.log("ARGS",arguments);
				if (status == google.maps.DirectionsStatus.OK) {
					console.log("TRANSIT to GO PR Station");
					prGoTrans =response.routes[0].legs[0];
					prGoCount--;
					if(prGoCount == 0){
						TransCalculator.GoPrCalc(prGoTrans, prGoDrive, prGOstation);
					}
				}
				else if(status == "OVER_QUERY_LIMIT"){
					setTimeout(function() {
						directionsService.route(requestPr2, funcPr2 );
					},1000);
				}
				else{
					console.log("I HAVE FAILED", requestPr2, response);
				}

			};
			directionsService.route(requestPr2, funcPr2);

			//------>

			//PR NEAREST STATAION.
	  		var station = nearestStation(leg.start_location.lat(),leg.start_location.lng());
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
	  		var startT =  new Date();
			var funcTTC1 = function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					console.log("distance to nearest Station");
					drive = response.routes[0].legs[0];
					count--;
					if(count == 0){
						var stopT =  new Date();
						console.log("Fuck ", (stopT-startT)/1000);
						TransCalculator.combCalc(trans, drive,station);
					}
				}
				else if(status == "OVER_QUERY_LIMIT"){
					setTimeout(function() {
						directionsService.route(requestPr2, funcTTC1 );
					}, 1000);
				}

			};
	  		directionsService.route(request2, funcTTC1);

	  
			var funcTTC2 =  function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					console.log("distance to nearest Station");
					trans =response.routes[0].legs[0];
					count--;
					if(count == 0){
						var stopT =  new Date();
						console.log("Fuck ", (stopT-startT)/1000);
						TransCalculator.combCalc(trans, drive,station);
					}
				}
				else if(status == "OVER_QUERY_LIMIT"){
					setTimeout(function() {
						directionsService.route(requestPr2, funcTTC2 );
					}, 1000);
				}
			};
			directionsService.route(request3, funcTTC2); 
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
						if (agency == "GO Transit"){
							var point= step.end_point;
							var station1 =  nearestStation(point.lat(), point.lng(), goAll);
							point =  step.start_location;
							var station2 = 	nearestStation(point.lng(), point.lng(), goAll);
							cost +=  priceMatch[""+ Math.min(station1.zone, station2.zone) +","+ Math.max(station1.zone, station2.zone)];
						}
						else{
							cost += startPrice(agency);
							console.log("start COST", cost, agency);
						}
						before = agency; 
						added.push(agency);
						first = false;
					}
				}
			});
			console.log("cost is", cost, added);
			return cost;

	};

	var routePriceFill = function(data){
			var go =  false;
			var before, cost, added = [], bCost = 0, gCost= 0, aCost = 0;

			data.steps.forEach(function(step){
				if (step.travel_mode == "TRANSIT"){
					var agency  =  step.transit.line.agencies[0].name;
					console.log(agency , added.indexOf(agency));
					if(go && added.indexOf(agency) == -1){
						aCost += transPrice(before, agency);
						added.push(agency);
						before = agency;
					}	
					else if(!go){
						if (agency == "GO Transit"){
							var point= step.end_point;
							var station1 =  nearestStation(point.lat(), point.lng(), goAll);
							point =  step.start_location;
							var station2 = 	nearestStation(point.lat(), point.lng(), goAll);
							gCost +=  priceMatch[""+ Math.min(station1.zone, station2.zone) +","+ Math.max(station1.zone, station2.zone)];
							go = true;
						}
						else{
							bCost += transPrice(agency, "GO Transit");
						}
						before = agency; 
						added.push(agency);
					}
				}
			});
			cost = [bCost, gCost, aCost];

			console.log("cost is", cost, added);
			return cost;

	};

	// walk Time till firsr transit
 	var btwTime = function(data){
			var elapsed = 0;
			var stop =  false;
			var last = null;
			data.steps.forEach(function(step){
				if (step.travel_mode != "TRANSIT" && !stop){
					elapsed += step.duration.value;
				}
				else{
					stop = true;
				}
			});
			console.log("BTW*******ELAPSED--", elapsed/60);
			return elapsed/60;
	};

	//all Time Elapsed
	var waitTime = function(data){
		var elapsed = 0;
		var last = null;
		data.steps.forEach(function(step){
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

	function transCalc(data){
		console.log("DATA", data );
		
		//IF DATA 
		if(data){
			var size = data.steps.length;
			var distance =  data.distance;
			console.log("STEP", data.steps[size -1].distance.value);
			collection["3"] = routePrice(data);
			collection["7"] = collection["3"];
			if (data.steps[ 0].travel_mode == "WALKING"){
				collection["18"] = parseFloat((data.steps[0].duration.value/60).toFixed(1));
				collection["20"] = parseFloat((data.steps[0].distance.value/250).toFixed(1));

			}

			
			if (data.steps[ size -1].travel_mode == "WALKING"){
				var wDistance = data.steps[ size -1].distance.value;
				collection["29LT"] = parseFloat((data.steps[size -1].duration.value/60).toFixed(1));
			}
			collection["28LT"] = parseFloat((waitTime(data)).toFixed(1));
			collection["27LT"] = parseFloat((timeSkip(data)).toFixed(1));

		}	
	};

	function timeGO (data){
		var go =  false;
		var time = 0, agency;
		data.steps.forEach(function(step){
				if (!go && step.travel_mode == "TRANSIT"){
					agency  =  step.transit.line.agencies[0].name;
					if (agency == "GO Transit"){
						go = true;
					}
					else{
						time += step.duration.value;
					}
				}
			});
		console.log("IMPORTANT", time);
		return time/60;

	}

	function GoTtcCalc(data){
		if (data){
			console.log("GOTTC CALC");
			console.log(data);
			var cost = routePriceFill(data);
			console.log("COST is ", cost);
			collection["13"] = cost[1];
			collection["14"] = cost[0];
			collection["14RL"] = cost[2];
			console.log("TIME GO");
			collection["24"] = timeGO(data);
			console.log("GO TTC CALC" ,collection[13] );
			console.log("TIME BEFORE******", collection["24"]);
			collection["27RL"] = timeSkipGo(data);
			collection["28RL"] = parseFloat((waitTime(data)).toFixed(1));
			collection["25"] = btwTime(data);
			collection["30RL"] = parseFloat((data.steps[data.steps.length -1].duration.value/60).toFixed(1));
		}
	}
	
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
		collection["26"] = data.duration.value/60;
		
	};

	function combCalc(trans, drive, station){ //PR for LT.
		console.log("START LOCAL TRANSIT PR");
		console.log("TRANS", trans,"DRIVE", drive, "STATION", station);
		var distance =  drive.distance.value;
		var transC = routePrice(trans);
		var numpool = $("#session_numMain").val();
		var parkCost =  $("#session_parkCost").val();
		console.log('Distance',distance,"Transit cost", transC);
		collection["4"] = ((distance * 14.7)/ 100000.0 + transC ).toFixed(2);
		collection["4i"] = parseFloat(((distance * 14.7)/ 100000.0).toFixed(2)); //  Gas 
		collection["4ii"] = transC; // Bus fare
		console.log("COST WORKED COLLECTION",collection["4"] , transC); 
		collection["15"] = station.price;
		collection["19"] = parseFloat((drive.duration.value/60).toFixed(1));
		if (parkCost !=""){
			collection["17"] = parseInt(parkCost);
		}
		else{
			collection["17"] = 0;
		}
		if(numpool !="" && numpool !="0"){
			collection["16"] = station.price/parseInt(numpool);
			collection["17i"] = collection["17"]/parseInt(numpool);
			collection["5"] = ((distance * 14.7)/ (100000.0  * parseInt(numpool)) + transC ).toFixed(2);
			collection["4iii"] = parseInt(numpool); 
		}
		else {
			collection["16"] = station.price/2;
			collection["17i"] = collection["17"] /2 ;
			collection["5"] = ((distance * 14.7)/200000.0 + transC ).toFixed(2);
			collection["4iii"] = 2 ; 
		}
		collection["6"] = collection["5"];
		collection["28LPR"] = parseFloat((waitTime(trans)).toFixed(1));
		collection["27LPR"] = parseFloat((timeSkip(trans)).toFixed(1));
		collection["29LPR"] = parseFloat((trans.steps[trans.steps.length -1].duration.value/60).toFixed(1));



		console.log("COST WORKED COLLECTION",collection["5"] , transC); 
		console.log("final Collection", collection);

		finished();
	};

	function finished(){
		collection["31"] = collection["18"] + collection["25"] + collection["27LT"] + collection["28LT"] + collection["29LT"];
		collection["32"] = collection["19"] + collection["25"] + collection["27LPR"] + collection["28LPR"] + collection["29LPR"];
		collection["33"] = collection["20"] + collection["25"] + collection["27LT"] + collection["28LT"] + collection["29LT"];
		collection["34"] = collection["21"] + collection["25"] + collection["27RT"] + collection["28RT"] + collection["30RT"];
		collection["35"] = collection["22"] + collection["25"] + collection["27RPR"] + collection["28RPR"] + collection["30RPR"];
		collection["36"] = collection["23"] + collection["25"] + collection["27RT"] + collection["28RT"] + collection["30RT"];
		collection["37"] = collection["24"] + collection["25"] + collection["27RL"] + collection["28RL"] + collection["30RL"];

		collection["31"] = parseFloat((collection["31"] ).toFixed(1));
		collection["32"] = parseFloat((collection["32"] ).toFixed(1));
		collection["33"] = parseFloat((collection["33"] ).toFixed(1));
		collection["34"] = parseFloat((collection["34"] ).toFixed(1));
		collection["35"] = parseFloat((collection["35"] ).toFixed(1));
		collection["36"] = parseFloat((collection["36"] ).toFixed(1));
		collection["37"] = parseFloat((collection["37"] ).toFixed(1));

		console.log(tableNew);
		$("#formView").hide();
		cCase =  demo["p1"];
		for(i in cCase){
			console.log("ID PASSED", i);
			var tableNew = templateMain(collection, i);
			$("#holder").append(tableNew);
			cCase[i].forEach(function(obj){
				var item = $("#"+obj.id +i)[0];
				if (obj.type == "M"){
					item.innerHTML = "" + (parseFloat(obj.value) * parseFloat(item.innerHTML));
				}
				else if(obj.type == "R"){
					item.innerHTML =  obj.value;
				}
				else if(obj.type == "S"){
					var jobj = $(item);
					var pool =  jobj.data("pool");
					var car = jobj.data("car");
					var tran = jobj.data("tran");  
					item.innerHTML = "" + ((parseFloat(obj.car) * parseFloat(car)/parseFloat(pool)) + (parseFloat(obj.tran) * parseFloat(tran))).toFixed(2);
				}
			});
		}

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
					station =  nearestStation(point.lat(), point.lng(), goAll);
				}
				
			}
		});
		console.log("destination Station is", station);
		return station;

	}

	// In Veichle Time
	function timeSkip(data){
		var elapsed =  0 ;
		data.steps.forEach(function(step){
			if (step.travel_mode == "TRANSIT"){
				elapsed +=  step.transit.arrival_time.value.getTime() - step.transit.departure_time.value.getTime();		
			}
		});
		console.log("destination Station is", elapsed/60000);
		return elapsed/60000;
	}

	//In Veichle Time
	function timeSkipGo(data){
		var first = false;
		var station= null;
		var elapsed =  0 ;

		data.steps.forEach(function(step){
			if (step.travel_mode == "TRANSIT"){
				var agency  =  step.transit.line.agencies[0].name;
				if(agency == "GO Transit" || !first){
					found = true;
					var point = step.end_point;
					first= true;
					elapsed +=  step.transit.arrival_time.value.getTime() - step.transit.departure_time.value.getTime();
				}
				else{
					first = true;
				}
				
			}
		});
		console.log("destination Station is", elapsed/60000);
		return elapsed/60000;
	}


	function GoPrCalc(trans, drive, station){
		console.log("GO PR TRANS", trans," GO PR DRIVE", drive, "GO PR STATION", station);
		var destStation = destGO(trans);
		var PRkey ;
		var numpool = $("#session_numMain").val();
		var distance =  drive.distance.value;
		var cost = routePriceFill(trans);
		collection["14RPR"] = cost[2];
		if(station.zone > destStation.zone ){
			PRkey  = ""+ destStation.zone +","+ station.zone;
		}
		else{
			PRkey  = ""+ station.zone +","+ destStation.zone;
		}
		
		pricePR =  priceMatch[PRkey];
		collection["9"] = parseFloat(((distance * 14.7)/ 100000.0 + pricePR ).toFixed(2));
		collection["9i"] = parseFloat(((distance * 14.7)/ 100000.0).toFixed(2)); //  Gas 
		collection["9ii"] = pricePR;// TRANSIT FARE 

		if(numpool !="" && numpool !="0"){
			collection["10"] = parseFloat(((distance * 14.7)/(100000.0  * parseInt(numpool)) + pricePR ).toFixed(2));
			collection["9iii"] = parseInt(numpool) ; 
		}
		else{
			collection["10"] = parseFloat(((distance * 14.7)/ 200000.0 + pricePR ).toFixed(2));
			collection["9iii"] = 2; 
		}
		collection["11"] = collection["10"];
		collection["22"] = parseFloat((drive.duration.value/60).toFixed(1));
		collection["27RPR"] = parseFloat((timeSkipGo(trans)).toFixed(1));
		collection["28RPR"] = parseFloat((waitTime(trans)).toFixed(1));
		collection["30RPR"] = parseFloat((trans.steps[trans.steps.length -1].duration.value/60).toFixed(1));
	};

	function GoCalc(trans, walk, station){
		console.log("GO TRANS", trans," GO Walk", walk, "GO STATION", station);
		var destStation = destGO(trans);
		var cost = routePriceFill(trans);
		collection["14RT"] = cost[2];
		console.log("DESTSATION",destStation);
		var Gokey ;
		var distance =  walk.distance.value;
		if(station.zone >destStation.zone ){
			Gokey  = ""+ destStation.zone +","+ station.zone;
		}
		else{
			Gokey  = ""+ station.zone +","+ destStation.zone;
		}
		console.log("GOKey is ",Gokey);
		collection["8"] =  priceMatch[Gokey];
		collection["12"] = collection["8"];
		collection["21"] = parseFloat((walk.duration.value/60).toFixed(1));
		collection["23"] = walk.distance.value/ 250;
		collection["27RT"] = parseFloat((timeSkipGo(trans)).toFixed(1));
		collection["28RT"] = parseFloat((waitTime(trans)).toFixed(1));
		collection["30RT"] = parseFloat((trans.steps[trans.steps.length -1].duration.value/60).toFixed(1));
	};
	
	return{
		autoCalc: autoCalc,
		transCalc: transCalc,
		combCalc:combCalc,
		GoPrCalc: GoPrCalc,
		GoCalc: GoCalc, 
		GoTtcCalc: GoTtcCalc 
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
	var start = new Date();
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
	var stop = new Date();
	console.log("ELASPSED : ", (stop - start)/1000);
	return ret;

};

