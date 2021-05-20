class Api::SearchController < ApplicationController

    def index
        if params[:query]
            search = params[:query].split("").join("%")
            @trails = Trail.where("name LIKE ?", "%#{search}%")
            @parks = Park.where("name LIKE ?", "%#{search}%")
        else
            @trails = Trail.all
            @parks = Park.all
        end
        
        render :search_results
    end

end