class Api::TrailsController < ApplicationController


    def show 
        @trail = Trail.find(params[:id])
        render :show
    end

    def index 
        @trails = Trail.all
        
        render :index
    end

    def nearby_trails 
        temp_trail = Trail.find(params[:id])

        @nearby_trails = Trail
                .select('*')
                .where('park_id = ?', temp_trail.park_id)
                .where.not(id: params[:id])
    end
    
    
end