console.log("we Have Lift off");
var trips =[{}];  
var curTrip = 1;
showMain = function(){
	console.log("show Main");
	var mainVal =  $("#main")[0].value;
	if (mainVal == "Auto Passenger/Carpool"){
		$("#nummain").show();
	}
	else {
		$("#nummain").hide();
	}
	if (mainVal =='Other'){
		$("#mainOther").show();
	}
	else{
		$("#mainOther").hide();
	}
	if (mainVal == "Local Transit" || mainVal == "Regional Transit"){
		$(".primaryOpt").show();
		showOption();
		if (mainVal == "Local Transit"){
			$("#maintransit").show();
		}
		else{
			$("#maintransit").hide();
		}
	}
	else{
		$(".primaryOpt").hide();
		hideOption();
	}
	console.log("showing Main", mainVal);
};

hideOption = function(){
	console.log("Start Hide Option");
	$("#parkcost").hide();
	$("#monthcom").hide();
	$("#accesscost").hide();
	$("#egresscost").hide();
	$("#maintransit").hide();
	$("#accesstransit").hide();
	$("#egresstransit").hide();
	$(".carInfo").hide();
};

carInfo = function(that){
	console.log(that.value);
	if(that.value > 0){
		$(".carInfo").show();
	}
	else{
		$(".carInfo").hide();
	}
};

showOther =  function(that){
	console.log("show Other");
	var id = "#other"+that.id;
	console.log("done", id);
	if (that.value == "Other" || that.value == "Regional Transit"){
		$(id).show();	
	}
	else{
		$(id).hide();
	}
};

hideOther = function(){
	console.log("hide Other");
	$("#mainOther").hide();
	$("#otherorigin").hide();
	$("#otherdestination").hide();	
	$("#otherpurpose").hide();
	$("#otheraccess").hide();	
	$("#othermain").hide();	
	$("#otheregress").hide();
	$("#nummain").hide();			
};

setTripTitle = function(){
	$("#tripId").html("Trip #/ID "+ curTrip);
};

showOption = function(){
	console.log("showing Option");
	var val =  $("#accessMode")[0].value;
	var val1 = $("#egressMode")[0].value;
	if(val == 2 || val == 4){ //10 bd
		$("#parkcost").show();
	}
	else{
		$("#parkcost").hide();
	}
	if(val == 2 || val == 3 || val == 4 || val == 5 || val == 6 || val == 7){ //10 b c d e f g
		$("#accesscost").show();
		console.log("accesstransit", val);
		if(val == 6){
			$("#accesstransit").show();
		}
		else{
			$("#accesstransit").hide();
		}
		if(val == 7){
			$("#otheraccess").show();
		}
		else{
			$("#otheraccess").hide();
		}
	}
	else{
		$("#accesscost").hide();
	}
	if (val1 == 2 || val1 == 3 || val1 == 4){ //19 b, c ,d
		$("#egresscost").show();
		if(val1 == 3){
			$("#egresstransit").show();
		}
		else{
			$("#egresstransit").hide();
		}
		if(val1 == 4){
			$("#otheregress").show();
		}
		else{
			$("#otheregress").hide();
		}
	}
	else{
		$("#egresscost").hide();
	}
	if (val == 1 || val == 5 || val1 == 1 || val == 2){ //19 a b or 10 a e
		console.log("show Month", val, val1);
		$("#monthcom").show();		
	}
	else{
		console.log("closing Month");
		$("#monthcom").hide();	
	}
};
function addfind(findFor){
 	fid = findFor;
	console.log(fid);
	$('#myModal').modal('show');
 }; 
     
function loadForm(num){
	for (key in trips[num-1]){
		$("#"+key).val(trips[num-1][key]);
	}
	setTripTitle();
	$("html, body").animate({ scrollTop: 0 }, "slow");	
};
function storeForm(num){
 	var val = {};
	$(".input")
	.filter(function(){
		return this.value != "";
	})
	.each(function(){
		val[this.id] = $(this).val();
		this.value = "";
	});
	console.log(val);
	trips[num]= val;
}

$( document ).ready(function(){
	console.log("Ready");
	$(".previous").hide();
	$(".next").hide();
	setTripTitle();
	hideOption();
	hideOther();
	$(".positive").change(function(){
		if(this.value < 0){
			this.value = 0;
		}
	});
	$(".previous").click(function(){
		$(".next").show();
		storeForm(curTrip-1);
		if (curTrip < 1){
			$(".previous").hide();
			curTrip = 1;
		}
		else if( (curTrip-1) == 1){
			$(".previous").hide();
			curTrip = 1;
			loadForm(curTrip);
		}
		else{
			curTrip--;
			loadForm(curTrip);
		}
	});
	$(".next").click(function(){
		$(".previous").show();
		storeForm(curTrip-1);
		var count = trips.length;
		if (curTrip >= count){
			curTrip = count;
			$(".next").hide();
		}
		else if( (curTrip + 1) == count){
			$(".next").hide();
			curTrip = count;
			loadForm(count);
		}
		else{
			curTrip++;
			loadForm(curTrip);
		}
	});
	 
	$("#continue").click(function(){
		console.log("Continue");
		return false;
	});
	$("#newTrip").click(function(){
		storeForm(curTrip-1);
		$(".previous").show();
		if (curTrip == trips.length){
			curTrip++;
			trips[curTrip -1] = null;
		}
		else {
			curTrip++;
			loadForm(curTrip);
			if (curTrip == trips.length){
				$(".next").hide();
			}
			else{
				$(".next").show();
			}
			
		}
		setTripTitle();
		$("html, body").animate({ scrollTop: 0 }, "fast");
	});
});



/// Geo MAp


