console.log("we Have Lift off");

showMain = function(){
	var mainVal =  $("#main")[0].value;
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
};

showOther =  function(that){
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
	$("#otherorigin").hide();
	$("#otherdestination").hide();	
	$("#otherpurpose").hide();
	$("#otheraccess").hide();	
	$("#othermain").hide();	
	$("#otheregress").hide();			
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
$( document ).ready(function(){
	hideOption();
	hideOther();
});
