class StaticPagesController < ApplicationController
  def home
  end

  def index
  end
  
  def socio
    
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
end
