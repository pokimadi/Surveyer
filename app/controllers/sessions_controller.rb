class SessionsController < ApplicationController
	
	def create
		render :json =>{ :continue=> false}
	end
end
