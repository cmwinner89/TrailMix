class Api::ReviewsController < ApplicationController

    def new
        @review = Review.new

        render :new
    end

    def create 
        # raise.params.inspect
        @review = Review.new(review_params)

        if @review.save!
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show 
        @review = Review.find(params[:id])
        render :show
    end

    def index 
        @reviews = Review.all
        render :index
    end

    def update
        @review = Review.find(params[:id])
        if @review.update_attributes
            render :show
        else
            render json: @review.errors.full_messages, state: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])

        @review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:post_date, :rating, :review, :trail_id, :user_id)
    end
end