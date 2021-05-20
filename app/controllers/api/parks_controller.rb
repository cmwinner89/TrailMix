class Api::ParksController < ApplicationController

    def show 
        @park = Park.find(params[:id])
    end
    
    def index
        @parks = Park.all
    end

    def trails_in_park
        temp_park = Park.find(params[:id])

        @trails_in_park = Trail
                    .select('*')
                    .where('park_id = ?', temp_park.id)
    end
end
