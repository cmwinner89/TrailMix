class Api::UsersController < ApplicationController

    skip_before_action :verify_authenticity_token

    def new
        @user = User.new
        render :new
    end

    def create
        # debugger
        @user = User.new(user_params)
        # debugger
        if @user.save!
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def edit
        @user = User.find(params[:id])
        render :edit                         
    end

    def update
        @user = User.find(params[:id])
        if @user && @user.update_attributes(user_params)
            render :show
        elsif !@user
            render json: @user.errors.full_messages, status: 400
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def delete
        @user = User.find(params[:id])

        if @user 
            @user.destroy
            render :show
        else
            render['Could not find user']
        end
    end

    private 

    # def selected_user
    #     User.find(params[:id])
    # end

    def user_params
        # debugger
        params.require(:user).permit(:fname, :lname, :email, :password)
    end
end
