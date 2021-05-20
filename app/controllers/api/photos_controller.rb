class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all

        render :index
    end

    def create
        @photo = Post.new(photo_params)

        if @photo.save!
            # render json {message: "Save successful"}
        else
            # render json: @photo.errors.full_messages
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:user_id, :trail_id)
    end
end