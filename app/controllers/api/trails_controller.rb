class Api::TrailsController < ApplicationController


    def show {
        @trail = Trail.find(params[:id])
        render :show
    }

    def index {
        @trails = Trail.all
        render :index
    }
end