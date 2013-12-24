var templateMain =  function(collection, id){
	if (!id){
		var id = '';
	}
	var temp = 'CHOICE: ' +id +'<br />' +
			'<table border=""26"" bordercolor="#330000" style="background-color:#00FFFF" width=""26"00%" cellpadding=""26"" cellspacing="0" id="resultTable'+ id + '">'+
			'<tr>'+
				'<td>Factor</td>'+
				'<td>Current Mode</td>'+
				'<td>AD</td>'+
				'<td>AP</td>'+
				'<td>LTW</td>'+
				'<td>LTAD</td>'+
				'<td>LTAP</td>'+
				'<td>LTCP</td>'+
				'<td>LTB</td>'+
				'<td>RTW</td>'+
				'<td>RTAD</td>'+
				'<td>RTAP</td>'+
				'<td>RTCP</td>'+
				'<td>RTB</td>'+
				'<td>RTLTW</td>'+
			'</tr>'+
			'<tr>'+
				'<td>TRAVEL COST/FARE($)</td>'+
				'<td>'+ ((chosenTrip.session_oneCost) ? chosenTrip.session_oneCost : '') + '</td>'+
				'<td id="101'+ id+ '" >'+collection["1"]+'</td>'+
				'<td id="102'+ id+ '"  >'+collection["2"]+'</td>'+
				'<td id="103'+ id+ '" >'+collection["3"]+'</td>'+
				'<td id="104'+ id+ '" data-car="'+ collection["4i"]+'" data-tran="'+collection["4ii"]+'" data-pool="1" >'+collection["4"]+'</td>'+
				'<td id="105'+ id+ '" data-car="'+ collection["4i"]+'" data-tran="'+collection["4ii"]+'" data-pool="'+collection["4iii"]+'" >'+collection["5"]+'</td>'+
				'<td id="106'+ id+ '" data-car="'+ collection["4i"]+'" data-tran="'+collection["4ii"]+'" data-pool="'+collection["4iii"]+'" >'+collection["6"]+'</td>'+
				'<td id="107'+ id+ '" >'+collection["7"]+'</td>'+
				'<td id="108'+ id+ '" >'+collection["8"]+'</td>'+
				'<td id="109'+ id+ '" data-car="'+ collection["9i"]+'" data-tran="'+collection["9ii"]+'" data-pool="1">'+collection["9"]+'</td>'+
				'<td id="110'+ id+ '" data-car="'+ collection["9i"]+'" data-tran="'+collection["9ii"]+'" data-pool="'+collection["9iii"]+'" >'+collection["10"]+'</td>'+
				'<td id="111'+ id+ '" data-car="'+ collection["9i"]+'" data-tran="'+collection["9ii"]+'" data-pool="'+collection["9iii"]+'" >'+collection["11"]+'</td>'+
				'<td id="112'+ id+ '" >'+collection["12"]+'</td>'+
				'<td id="113'+ id+ '" >'+collection["13"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Reserved Parking at GO Stations</td>'+
				'<td></td>'+
				'<td id="201'+ id+ '">--</td>'+
				'<td id="102'+ id+ '">--</td>'+
				'<td id="203'+ id+ '">--</td>'+
				'<td id="204'+ id+ '">--</td>'+
				'<td id="205'+ id+ '">--</td>'+
				'<td id="206'+ id+ '">--</td>'+
				'<td id="207'+ id+ '">--</td>'+
				'<td id="208'+ id+ '">--</td>'+
				'<td id="209'+ id+ '" >--</td>'+
				'<td id="210'+ id+ '">--</td>'+
				'<td id="211'+ id+ '" >--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Daily/Monthly Parking Cost at Go Stations </td>'+
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td id="309'+ id+ '" >#</td>'+
				'<td>--</td>'+
				'<td id="311'+ id+ '" >#</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Local Transit-GO Access Fare ($)</td>'+
				'<td>'+ ((chosenTrip.session_accessCost) ? chosenTrip.session_accessCost  : '') + '</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td id="413'+ id+ '" >'+collection["14"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>GO Local Transit  Egress Fare ($)</td>'+
				'<td>' + ((chosenTrip.session_egressCost) ? chosenTrip.session_egressCost : '') + '</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td id="508'+ id+ '" >'+collection["14RT"]+'</td>'+
				'<td id="509'+ id+ '" >'+collection["14RPR"]+'</td>'+
				'<td id="510'+ id+ '" >'+collection["14RPR"]+'</td>'+
				'<td id="511'+ id+ '" >'+collection["14RPR"]+'</td>'+
				'<td id="512'+ id+ '" >'+collection["14RT"]+'</td>'+
				'<td id="513'+ id+ '" >'+collection["14RL"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Transfer Time(min)</td>'+
				'<td>' + ((chosenTrip.session_transWait) ? chosenTrip.session_transWait : '') + '</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td id="603'+ id+ '" >'+collection["28LT"]+'</td>'+
				'<td id="604'+ id+ '" >'+collection["28LPR"]+'</td>'+
				'<td id="605'+ id+ '" >'+collection["28LPR"]+'</td>'+
				'<td id="606'+ id+ '" >'+collection["28LPR"]+'</td>'+
				'<td id="607'+ id+ '" >'+collection["28LT"]+'</td>'+
				'<td id="608'+ id+ '" >'+collection["28RT"]+'</td>'+
				'<td id="609'+ id+ '" >'+collection["28RPR"]+'</td>'+
				'<td id="610'+ id+ '" >'+collection["28RPR"]+'</td>'+
				'<td id="611'+ id+ '" >'+collection["28RPR"]+'</td>'+
				'<td id="612'+ id+ '" >'+collection["28RT"]+'</td>'+
				'<td id="613'+ id+ '" >'+collection["28RL"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Wait Time(min)</td>'+
				'<td>'+ ((chosenTrip.session_waitTime )? chosenTrip.session_waitTime : '') + '</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td id="703'+ id+ '" >'+collection["25LT"]+'</td>'+
				'<td id="704'+ id+ '" >'+collection["25LPR"]+'</td>'+
				'<td id="705'+ id+ '" >'+collection["25LPR"]+'</td>'+
				'<td id="706'+ id+ '" >'+collection["25LPR"]+'</td>'+
				'<td id="707'+ id+ '" >'+collection["25LT"]+'</td>'+
				'<td id="708'+ id+ '" >'+collection["25RT"]+'</td>'+
				'<td id="709'+ id+ '" >'+collection["25RPR"]+'</td>'+
				'<td id="710'+ id+ '" >'+collection["25RPR"]+'</td>'+
				'<td id="711'+ id+ '" >'+collection["25RPR"]+'</td>'+
				'<td id="712'+ id+ '" >'+collection["25RT"]+'</td>'+
				'<td id="713'+ id+ '" >'+collection["25RL"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>next Bus Information(Local Transit)</td>'+
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td id="803'+ id+ '" >#</td>'+
				'<td id="804'+ id+ '" >#</td>'+
				'<td id="805'+ id+ '" >#</td>'+
				'<td id="806'+ id+ '" >#</td>'+
				'<td id="807'+ id+ '" >#</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td id="813'+ id+ '" >#</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Wifi on GO Trains/ Buses</td>'+
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td id="908'+ id+ '" >#</td>'+
				'<td id="909'+ id+ '" >#</td>'+
				'<td id="910'+ id+ '" >#</td>'+
				'<td id="911'+ id+ '" >#</td>'+
				'<td id="912'+ id+ '" >#</td>'+
				'<td id="913'+ id+ '" >#</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Parking Cost at Local Transit P&R Station ($)</td>'+
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>'+collection["15"]+'</td>'+
				'<td>--</td>'+
				'<td>'+collection["16"]+'</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
			'</tr>'+			
			'<tr>'+
				'<td>Parking Cost($) at destination</td>'+
				'<td>' + ((chosenTrip.session_parkCost) ? chosenTrip.session_parkCost :'')  + '</td>'+
				'<td id="1101'+ id+ '">'+((chosenTrip.session_parkCost) ? chosenTrip.session_parkCost :'') +'</td>'+
				'<td id="1102'+ id+ '">'+((chosenTrip.session_parkCost) ? chosenTrip.session_parkCost :'') +'</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
			'</tr>'+	
			'<tr>'+
				'<td>Access Time</td>'+
				'<td>' + ((chosenTrip.session_accessTime)? chosenTrip.session_accessTime: "") + '</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>'+collection["18"]+'</td>'+
				'<td>'+collection["19"]+'</td>'+
				'<td>'+collection["19"]+'</td>'+
				'<td>'+collection["19"]+'</td>'+
				'<td>'+collection["20"]+'</td>'+
				'<td>'+collection["21"]+'</td>'+
				'<td>'+collection["22"]+'</td>'+
				'<td>'+collection["22"]+'</td>'+
				'<td>'+collection["22"]+'</td>'+
				'<td>'+collection["23"]+'</td>'+
				'<td>'+collection["24"]+'</td>'+
			'</tr>'+	
			'<tr>'+
				'<td>in-veichle Travel Time(min)</td>'+
				'<td>' + ((chosenTrip.session_travelTime) ? chosenTrip.session_travelTime :'') + '</td>'+
				'<td id="1301'+ id+ '">'+collection["26"]+'</td>'+
				'<td id="1302'+ id+ '">'+collection["26"]+'</td>'+
				'<td id="1303'+ id+ '">'+collection["27LT"]+'</td>'+
				'<td id="1304'+ id+ '">'+collection["27LPR"]+'</td>'+
				'<td id="1305'+ id+ '">'+collection["27LPR"]+'</td>'+
				'<td id="1306'+ id+ '">'+collection["27LPR"]+'</td>'+
				'<td id="1307'+ id+ '">'+collection["27LT"]+'</td>'+
				'<td id="1308'+ id+ '">'+collection["27RT"]+'</td>'+
				'<td id="1309'+ id+ '">'+collection["27RPR"]+'</td>'+
				'<td id="1310'+ id+ '">'+collection["27RPR"]+'</td>'+
				'<td id="1311'+ id+ '">'+collection["27RPR"]+'</td>'+
				'<td id="1312'+ id+ '">'+collection["27RT"]+'</td>'+
				'<td id="1313'+ id+ '">'+collection["27RL"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td> Egress Time(min)</td>'+
				'<td>' + ((chosenTrip.session_egressTime) ? chosenTrip.session_egressTime: '') + '</td>'+
				'<td id="1401'+ id+ '">--</td>'+
				'<td id="1402'+ id+ '">--</td>'+
				'<td id="1403'+ id+ '">'+collection["29LT"]+'</td>'+
				'<td id="1404'+ id+ '">'+collection["29LPR"]+'</td>'+
				'<td id="1405'+ id+ '">'+collection["29LPR"]+'</td>'+
				'<td id="1406'+ id+ '">'+collection["29LPR"]+'</td>'+
				'<td id="1407'+ id+ '">'+collection["29LT"]+'</td>'+
				'<td id="1408'+ id+ '">'+collection["30RT"]+'</td>'+
				'<td id="1409'+ id+ '">'+collection["30RPR"]+'</td>'+
				'<td id="1410'+ id+ '">'+collection["30RPR"]+'</td>'+
				'<td id="1411'+ id+ '">'+collection["30RPR"]+'</td>'+
				'<td id="1412'+ id+ '">'+collection["30RT"]+'</td>'+
				'<td id="1413'+ id+ '">'+collection["30RL"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Total Trip Time(min)</td>'+
				'<td>' + ((chosenTrip.session_oneTime) ?(chosenTrip.session_oneTime): " ") + '</td>'+
				'<td id="1501'+ id+ '">'+collection["26"]+'</td>'+
				'<td id="1502'+ id+ '">'+collection["26"]+'</td>'+
				'<td id="1503'+ id+ '">'+collection["31"]+'</td>'+
				'<td id="1504'+ id+ '">'+collection["32"]+'</td>'+
				'<td id="1505'+ id+ '">'+collection["32"]+'</td>'+
				'<td id="1506'+ id+ '">'+collection["32"]+'</td>'+
				'<td id="1507'+ id+ '">'+collection["33"]+'</td>'+
				'<td id="1508'+ id+ '">'+collection["34"]+'</td>'+
				'<td id="1509'+ id+ '">'+collection["35"]+'</td>'+
				'<td id="1510'+ id+ '">'+collection["35"]+'</td>'+
				'<td id="1511'+ id+ '">'+collection["35"]+'</td>'+
				'<td id="1512'+ id+ '">'+collection["36"]+'</td>'+
				'<td id="1513'+ id+ '">'+collection["37"]+'</td>'+
			'</tr>'+
		'</table>'+
		'<hr />';
	return temp;
};
myNavigator = function(choice){
	var n =  '<ul class="pager"  id="NextChoice"> '+
		  //'<li><a id="newTrip"> Prvious </a></li>' +
		  '<li><a id="continue" onClick ="beforeDisplay(\''+choice+'\')"> Next </a></li>' +
		'</ul>'+ "<hr />";
	return n; 
};

beforeDisplay = function(choice){
	var holder =  $("#holder");
	$('html,body').animate({scrollTop: holder.offset().top},'slow');
	tableDisplay(choice);
};


choicePicker = function(id, exclude){
	var confidence = {1:"Not Confident", 2:"Somewhat Confident", 3:"Neutral", 4:"Confident", 5:"Strongly Confident" };
	var title = {1:"AD", 2:"AP", 3:"LTW", 4:"LTAD", 5:"LTAP", 6:"LTCP", 7:"LTB", 8:"RTW", 9:"RTAD", 10:"RTAP", 11:"RTCP", 12:"RTB", 13:"RTLTW"};
	for (key in exclude){
		delete title[exclude[key]];
	}
	var tempS, temp = '<p>Which of the choices do you prefer?</p><br />';
	for (key in title){
		tempS = '<label class="checkbox inline">' +
				'<input onClick="showNext(\''+id+'\',\''+ title[key]+  '\', this)" type="checkbox" class="choiceBox" name="'+"choice" + id +'" id="'+ "box" + id + key+'" value="'+ title[key] +'">'+ title[key] +
				'</label>';
		temp += tempS;
	}
	temp += "<p> Based on the chosen mode, what is the expected departure time (from home to work)? </p>";

	temp += "<table>" +
			"<tr><td>"+ 
			'<label class="inline"> Please print what your departure time will be:'+
		  '</label> </td><td>' +
		  '<input id=​"expected" name="time" type="time" onclick="showNext(\''+id +' \', 0 )" >​'+
		  '</td></tr></table>'+
		  "<h5>Confidence in Stated Choice</h5>";

	for (key in confidence){
		tempS = '<label class="checkbox inline">' +
				'<input onClick="showNext(\''+id+'\',\''+ confidence[key]+  '\', this)" type="checkbox" class="confBox" name="'+"conf" + id +'" id="'+ "box" + confidence[key]+'" value="'+ confidence[key] +'">'+ confidence[key] +
				'</label>';
		temp += tempS;
	}

	//temp += '<hr />';
	return temp;

};

pd = function(nTo, nFrom){
	// $.ajax({
	// 		type: "POST",
	// 		url: "/store",
	// 		data: {
	// 			trips:[{"session_timeTrip":"13:00","session_earlyTime":"01:59","session_lateTime":"01:59","origin":"Home","origin_address":"3122 Hurontario street.","destination":"Work","destination_address":"80 peter street","regDist":"3","session_regName":"cooksville","purpose":"Home","main":"Auto Driver","session_oneTime":"10","session_oneCost":"15","session_parkCost":"12","bossPay":"no"}]
	// 		},
	// 		success: function(data){
	// 			console.log(data);
	// 		},
	// 		dataType: "json"
	// 	});


	$.ajax({
			type: "GET",
			url: "/time",
			data: {
				to : nTo,
				from : nFrom
			},
			success: function(data){
				console.log(data);
			},
			dataType: "json"
	});
};
showNext =  function(id , val, that){
	if (that){
		if($(that).attr("class") == "confBox"){
			$('.confBox').prop('checked', false);
			$(that).prop('checked', true);
		}
		if($(that).attr("class") == "choiceBox"){
			$('.choiceBox').prop('checked', false);
			$(that).prop('checked', true);
		}
	}
	var conf = $("input[name='conf"+ id +"']:checked").val();
	var ch = $("input[name='choice"+ id + "']:checked").val();
	var t = $("input[name='time']").val();




	if (conf && ch && t != ''){
		userChoices[id] = {"confidence": conf, "choice" : ch,  "expected_time": t };
		if (id != "c6" ){
			$("#NextChoice").show();
		}
		else{
			$.ajax({
				type: "POST",
				url: "/store",
				data: {
					trips:trips,
					choices: userChoices,
					quest: [questionChoice, "p1"]
				},
				success: function(data){
					console.log(data);
				},
				dataType:'json'
			});

			$.get( "/socio", function( data ) {
				console.log(data);
				$("#introductionB").hide();
				$("#holder").empty();
				$("#holder").html(data);
				hideSocio();
				var holder =  $("#holder");
				$('html,body').animate({scrollTop: holder.offset().top},'slow');
			});


			//This is where Submission will take Place
		}
	}
};












