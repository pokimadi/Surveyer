class StaticPagesController < ApplicationController
  def home
  end

  def index
  end
  
  def socio
    render layout: false
  end
  
  def goprice
    puts params[:transit][:origin]
    origin = Station.where(name: params[:transit][:origin]).first.zone
    dest = Station.where(name: params[:transit][:dest]).first.zone
    price = GoPrice.where(origin:origin,dest:dest).first.price
    respond_to do |format|
      format.json { render :json =>{ :success=> true, :price=> price } }
    end
  end

  def store
    puts params
    params[:trips].each do |t|
      Trip.create(t)
    end
    params.choices.each do |choice|
      chosen = Choice.new(choice)
      chosen.condition = params.quest[0]
      chosen.person = params.quest[1]
      chosen.save
    end
    
    render :json =>{ :success=> true } 
  end


  def person_params
      params.require(:trip).permit(:session_timeTrip, :session_earlyTime, :session_lateTime, 
        :origin, :session_otherOrigin, :origin_address, :destination, :session_otherDestin, 
        :destination_address, :regDist, :session_regName, :purpose, :session_otherPurpose, :main, 
        :session_mainOther, :session_numMain, :otherMain, :mainTransit, :session_accessStation, :accessMode, 
        :session_otherAccess, :accessRegion, :accessTransit, :session_parkCost, :session_accessTime, :session_accessCost, 
        :session_waitTime, :session_numTrans, :session_transWait, :session_travelTime, :session_travelCost, 
        :session_egressStop, :egressMode, :session_otherEgress, :egressTransit, :session_egressTime, 
        :session_egressCost, :session_oneTime, :session_oneCost, :transitPay, :session_parkCost, :monthCom, :bossPay)
  end
end
