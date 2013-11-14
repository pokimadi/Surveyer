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
				'<td>RTCB</td>'+
				'<td>RTB</td>'+
				'<td>RTLTW</td>'+
			'</tr>'+
			'<tr>'+
				'<td>TRAVEL COST/FARE($)</td>'+
				'<td></td>'+
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
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td id="209'+ id+ '" >--</td>'+
				'<td>--</td>'+
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
				'<td></td>'+
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
				'<td></td>'+
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
				'<td></td>'+
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
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td id="703'+ id+ '" >'+collection["25"]+'</td>'+
				'<td id="704'+ id+ '" >'+collection["25"]+'</td>'+
				'<td id="705'+ id+ '" >'+collection["25"]+'</td>'+
				'<td id="706'+ id+ '" >'+collection["25"]+'</td>'+
				'<td id="707'+ id+ '" >'+collection["25"]+'</td>'+
				'<td id="708'+ id+ '" >'+collection["25"]+'</td>'+
				'<td id="709'+ id+ '" >'+collection["25"]+'</td>'+
				'<td id="710'+ id+ '" >'+collection["25"]+'</td>'+
				'<td id="711'+ id+ '" >'+collection["25"]+'</td>'+
				'<td id="712'+ id+ '" >'+collection["25"]+'</td>'+
				'<td id="713'+ id+ '" >'+collection["25"]+'</td>'+
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
				'<td></td>'+
				'<td>'+collection["17"]+'</td>'+
				'<td>'+collection["17"]+'</td>'+
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
				'<td></td>'+
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
				'<td></td>'+
				'<td>'+collection["26"]+'</td>'+
				'<td>'+collection["26"]+'</td>'+
				'<td>'+collection["27LT"]+'</td>'+
				'<td>'+collection["27LPR"]+'</td>'+
				'<td>'+collection["27LPR"]+'</td>'+
				'<td>'+collection["27LPR"]+'</td>'+
				'<td>'+collection["27LT"]+'</td>'+
				'<td>'+collection["27RT"]+'</td>'+
				'<td>'+collection["27RPR"]+'</td>'+
				'<td>'+collection["27RPR"]+'</td>'+
				'<td>'+collection["27RPR"]+'</td>'+
				'<td>'+collection["27RT"]+'</td>'+
				'<td>'+collection["27RL"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td> Egress Time(min)</td>'+
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>'+collection["29LT"]+'</td>'+
				'<td>'+collection["29LPR"]+'</td>'+
				'<td>'+collection["29LPR"]+'</td>'+
				'<td>'+collection["29LPR"]+'</td>'+
				'<td>'+collection["29LT"]+'</td>'+
				'<td>'+collection["30RT"]+'</td>'+
				'<td>'+collection["30RPR"]+'</td>'+
				'<td>'+collection["30RPR"]+'</td>'+
				'<td>'+collection["30RPR"]+'</td>'+
				'<td>'+collection["30RT"]+'</td>'+
				'<td>'+collection["30RL"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Total Trip Time(min)</td>'+
				'<td></td>'+
				'<td>'+collection["26"]+'</td>'+
				'<td>'+collection["26"]+'</td>'+
				'<td>'+collection["31"]+'</td>'+
				'<td>'+collection["32"]+'</td>'+
				'<td>'+collection["32"]+'</td>'+
				'<td>'+collection["32"]+'</td>'+
				'<td>'+collection["33"]+'</td>'+
				'<td>'+collection["34"]+'</td>'+
				'<td>'+collection["35"]+'</td>'+
				'<td>'+collection["35"]+'</td>'+
				'<td>'+collection["35"]+'</td>'+
				'<td>'+collection["36"]+'</td>'+
				'<td>'+collection["37"]+'</td>'+
			'</tr>'+
		'</table>'+
		'<hr />';
	return temp;
};