console.log("we Have Lift off");
var trips =[{}];
var userChoices = {};  
var curTrip = 1;
var nTo, nFrom;
var tPostals = [];
var error = false;
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


postal  = function(to , from, cb){
	var gcode = 2;
	var getPostal =  function(comp){
		var found = null;
		comp.forEach(function(bl){
			if(bl.types[0] == "postal_code" || bl.types[0] == "postal_code_prefix"){
				found =  bl.long_name.replace(" ",'');
			}
		});
		return found;
	};
	var done = function(){		
		cb();
	};
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({'address': to}, function(results, status) {
		
		console.log(results);
		nTo = getPostal(results[0].address_components);
		gcode--;
		if (gcode == 0){
			done();
		}
	});
	geocoder.geocode({'address': from}, function(results, status) {
		console.log(results);
		nFrom = getPostal(results[0].address_components);
		gcode--;
		if (gcode == 0){
			done();
		}
	});
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

occupInfo = function(that, suffix){
	console.log(that.value);
	if(that.value == "Other"){
		$("#other"+suffix).show();
	}
	else{
		$("#other"+suffix).hide();
	}

};

function getWorkHome(tr){
	var ret;
	var ctrip;
	trips.forEach(function(trip){
		console.log(trip.origin);
		console.log(trip.destination);
		if (trip.origin ==  "Home" && trip.destination ==  "Work"){
			ret = {
				start: trip.origin_address,
				end: trip.destination_address
			};
			ctrip =  trip;
		}	
	});
	if (tr){
		return ctrip;
	}
	else{
		return ret;
	}
}
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

hideSocio =  function(){
	$("#otherOccup").hide();
	$("#otherTransPass").hide();
	$("#otherHouse").hide();
	$(".carInfo").hide();
	$(".positive").change(function(){
		if(this.value < 0){
			this.value = 0;
		}
	});
	$("#complete").click(function(){
		var val = {} ,err = [];
		$(".input")
		.filter(function(){
			return $(this).is(':visible');
		})
		.each(function(){
			if (this.value != ""){
				val[this.id] = $(this).val();
			}
			else{
				err.push(this.id); 
			}
		});

		if(err.length == 0){
			$.ajax({
				type: "POST",
				url: "/complete",
				data: {
					social:val
				},
				success: function(data){
					alert("Complete Thank you.");
				},
				dataType:'json'
			});
		}
		else{
			$("#"+err[0]).focus();
		};

	});
};

Login = function(){
	$("#introduction").hide();
	$("#introductionA").show();
	$("#holder").show();
	$("html, body").animate({ scrollTop: 0 }, "fast");
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
	$('#accessregion').hide();
};

setTripTitle = function(){
	if (error){
		$("#tripId").html("Trip #/ID "+ curTrip+ " Fill all the Fields to Proceed.");
	}
	else{
		$("#tripId").html("Trip #/ID "+ curTrip);
	}
};

showOption = function(){
	console.log("showing Option");
	var val =  $("#accessMode")[0].value;
	var val1 = $("#egressMode")[0].value;
	if (val == 'Regional Transit'){
		$('#accessregion').show();
	}
	else{
		$('#accessregion').hide();
	}
	if(val == 'Auto Driver(P&R)' || val == 'Auto Passenger(Car Pool)'){ //10 bd
		$("#parkcost").show();
	}
	else{
		$("#parkcost").hide();
	}
	if(val == 'Auto Driver(P&R)' || val == 'Auto Passenger(K&R)' || val == 'Auto Passenger(Car Pool)' || val == 'Bike' || val == 'local Transit' || val == 'Other'){ //10 b c d e f g
		$("#accesscost").show();
		console.log("accesstransit", val);
		if(val == 'local Transit'){
			$("#accesstransit").show();
		}
		else{
			$("#accesstransit").hide();
		}
		if(val == 'Other'){
			$("#otheraccess").show();
		}
		else{
			$("#otheraccess").hide();
		}
	}
	else{
		$("#accesscost").hide();
		$("#accesstransit").hide();
		$("#otheraccess").hide();
	}
	if (val1 == 'Bike' || val1 == 'Local Transit' || val1 == 'Other'){ //19 b, c ,d
		$("#egresscost").show();
		if(val1 == 'Local Transit'){
			$("#egresstransit").show();
		}
		else{
			$("#egresstransit").hide();
		}
		if(val1 == 'Other'){
			$("#otheregress").show();
		}
		else{
			$("#otheregress").hide();
		}
	}
	else{
		$("#egresscost").hide();
		$("#egresstransit").hide();
		$("#otheregress").hide();
	}
	if (val == 'Walk' || val1 == 'Walk' || val1 == 'Bike' || val == 'Bike'){ //19 a b or 10 a e
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

function showStation(){
	console.log(this);
	if(this.value == 10 || this.value == 3){
		$("#regName").show();
	}
	else{
		$("#regName").hide();
	}
}
     
function loadForm(num){
	for (key in trips[num-1]){
		$("#"+key).val(trips[num-1][key]);
	}
	setTripTitle();
	var holder =  $("#holder");
	$('html,body').animate({scrollTop: holder.offset().top},'slow');
};
function storeForm(num){
 	var val = {} ,err = [];
	$(".input")
	.filter(function(){
		//return this.value != "";
		return $(this).is(':visible');
	})
	.each(function(){
		if (this.value != ""){
			val[this.id] = $(this).val();
		}
		else{
			err.push(this.id); 
		}
		//this.value = "";
	});
	trips[num]= val;
	if(err.length == 0)
	{
		$(".input").val("");
		error = false;
		return err;
	}
	else {
		error = true;
		return err;
	}
}

$( document ).ready(function(){
	console.log("Ready");
	$(".previous").hide();
	$(".next").hide();
	$(".silence").hide();
	setTripTitle();
	hideOption();
	hideOther();
	$(".positive").change(function(){
		if(this.value < 0){
			this.value = 0;
		}
	});
	$(".previous").click(function(){
		var valid = storeForm(curTrip-1);
		if(valid.length == 0){
			$(".next").show();
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
		}
		else{
			$("#"+valid[0]).focus();
			setTripTitle();	
		}
	});
	$(".next").click(function(){	
		var valid = storeForm(curTrip-1);
		if(valid.length == 0){
			$(".previous").show();
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
		}
		else {
			$("#"+valid[0]).focus();
			setTripTitle();	
		}
	});
	 
	$("#continue").click(function(){
		console.log("Continue");
		var valid = storeForm(curTrip-1);
		if(valid.length == 0){
			var route = getWorkHome(false);
			$("#introductionA").hide();
			$("#introductionB").show();
			//console.log("ROUTE:" ,route);
			if (route){
				postal( route.end, route.start  ,function(){
					$("html, body").animate({ scrollTop: 0 }, "fast");
					$("#holder").empty();
					calcRoute(route);
				});
			}
			else{
				alert("Need Home to Work");
			}
		}
		else {
			$("#"+valid[0]).focus();
			setTripTitle();	
		}
		return false;
	});
	$("#newTrip").click(function(){
		var valid = storeForm(curTrip-1);
		if(valid.length == 0){
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
		}
		else{
			$("#"+valid[0]).focus();
			
		}
		
		setTripTitle();
		//$("html, body").animate({ scrollTop: 0 }, "fast");
	});
});



/// Geo MAp


