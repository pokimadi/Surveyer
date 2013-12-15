class StaticPagesController < ApplicationController
  # before_action :signed_in_user, only: [:home, :complete, :store]
  def home
    if signed_in?
      current_user
      puts "FOUND"
    else
      user = Person.create({})
      puts "CREATED"
      sign_in(user)
    end
  end

  def index
  end
  
  def socio
    render layout: false
  end

  def complete
    social = Social.new(params[:social])
    social.person_id = current_user.id
    social.save
    render :json =>{ :success=> true}
  end

  def ride
    puts params
    from = params[:from] 
    to = params[:to]
    if(to && from)
      if(to.length == 6 )
        queryTo = "SELECT GTA06 FROM postalcode_to_zone WHERE POSTALCODE= '#{to}' LIMIT 1"
      else 
        queryTo = "SELECT GTA06 FROM postalcode_to_zone WHERE POSTALCODE LIKE '#{to}%' LIMIT 1"
      end
      if(to.length == 6 )
        queryFrom = "SELECT GTA06 FROM postalcode_to_zone WHERE POSTALCODE= '#{from}' LIMIT 1"
      else 
        queryFrom = "SELECT GTA06 FROM postalcode_to_zone WHERE POSTALCODE LIKE '#{from}%' LIMIT 1"
      end
      query = "SELECT travel_time FROM ampeak_auto_tt_06zones t1  WHERE t1.From = (#{queryFrom})"+
      " AND t1.To = (#{queryTo})"
      result = ActiveRecord::Base.connection.execute(query);
      if result.any?
        render :json =>{ :success=> true, :duration => result.first[0] }
      else
        render :json =>{ :success=> true, :duration => result.first }
      end
    else
      render :json =>{ :success=> true, :duration => nil }
    end     
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
    params[:trips].each do |k, v|
      puts "input #{k}"
      puts v
      trip = Trip.new(v)
      trip.person_id = current_user.id
      trip.save
    end
    params[:choices].each do |k, v|
      puts v
      chosen = Choice.new(v)
      chosen.scenario  = k
      chosen.condition = params[:quest][0]
      chosen.person = params[:quest][1]
      chosen.person_id =  current_user.id
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
  
  private
    # def signed_in_user
    #   redirect_to signin_url, notice: "Please sign in." unless signed_in?
    # end
end
