var templateMain =  function(collection){
	var temp = '<table border=""26"" bordercolor="#330000" style="background-color:#00FFFF" width=""26"00%" cellpadding=""26"" cellspacing="0">'+
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
				'<td>'+collection["1"]+'</td>'+
				'<td>'+collection["2"]+'</td>'+
				'<td>'+collection["3"]+'</td>'+
				'<td>'+collection["4"]+'</td>'+
				'<td>'+collection["5"]+'</td>'+
				'<td>'+collection["6"]+'</td>'+
				'<td>'+collection["7"]+'</td>'+
				'<td>'+collection["8"]+'</td>'+
				'<td>'+collection["9"]+'</td>'+
				'<td>'+collection["10"]+'</td>'+
				'<td>'+collection["11"]+'</td>'+
				'<td>'+collection["12"]+'</td>'+
				'<td>'+collection["13"]+'</td>'+
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
				'<td>'+collection["14"]+'</td>'+
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
				'<td>'+collection["14"]+'</td>'+
				'<td>'+collection["14"]+'</td>'+
				'<td>'+collection["14"]+'</td>'+
				'<td>'+collection["14"]+'</td>'+
				'<td>'+collection["14"]+'</td>'+
				'<td>'+collection["14"]+'</td>'+
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
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Daily Parking Cost at Go Stations </td>'+
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
				'<td>#</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Monthly Parking cost at GO Stations</td>'+
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>#</td>'+
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
				'<td>next Bus Information(Local Transit)3</td>'+
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>#</td>'+
				'<td>#</td>'+
				'<td>#</td>'+
				'<td>#</td>'+
				'<td>#</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>#</td>'+
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
				'<td>#</td>'+
				'<td>#</td>'+
				'<td>#</td>'+
				'<td>#</td>'+
				'<td>#</td>'+
				'<td>#</td>'+
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
				'<td>Wait Time(min)</td>'+
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>'+collection["25"]+'</td>'+
				'<td>'+collection["25"]+'</td>'+
				'<td>'+collection["25"]+'</td>'+
				'<td>'+collection["25"]+'</td>'+
				'<td>'+collection["25"]+'</td>'+
				'<td>'+collection["25"]+'</td>'+
				'<td>'+collection["25"]+'</td>'+
				'<td>'+collection["25"]+'</td>'+
				'<td>'+collection["25"]+'</td>'+
				'<td>'+collection["25"]+'</td>'+
				'<td>'+collection["25"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>in-veichle Travel Time(min)</td>'+
				'<td></td>'+
				'<td>'+collection["26"]+'</td>'+
				'<td>'+collection["26"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
				'<td>'+collection["27"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td>Transfer Time(min)</td>'+
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>'+collection["28"]+'</td>'+
				'<td>'+collection["28"]+'</td>'+
				'<td>'+collection["28"]+'</td>'+
				'<td>'+collection["28"]+'</td>'+
				'<td>'+collection["28"]+'</td>'+
				'<td>'+collection["28"]+'</td>'+
				'<td>'+collection["28"]+'</td>'+
				'<td>'+collection["28"]+'</td>'+
				'<td>'+collection["28"]+'</td>'+
				'<td>'+collection["28"]+'</td>'+
				'<td>'+collection["28"]+'</td>'+
			'</tr>'+
			'<tr>'+
				'<td> Egress Time(min)</td>'+
				'<td></td>'+
				'<td>--</td>'+
				'<td>--</td>'+
				'<td>'+collection["29"]+'</td>'+
				'<td>'+collection["29"]+'</td>'+
				'<td>'+collection["29"]+'</td>'+
				'<td>'+collection["29"]+'</td>'+
				'<td>'+collection["29"]+'</td>'+
				'<td>'+collection["30"]+'</td>'+
				'<td>'+collection["30"]+'</td>'+
				'<td>'+collection["30"]+'</td>'+
				'<td>'+collection["30"]+'</td>'+
				'<td>'+collection["30"]+'</td>'+
				'<td>'+collection["30"]+'</td>'+
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
		'</table>';
	return temp;
};