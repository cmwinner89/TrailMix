class Api::UsersController < ApplicationController

    def new
        @user = selectediser
    end

    def create
        @user = User.new(user_params)

        if @user.save!
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status 401
        end
    end

    def show
        @user = selected_user
    end

    def edit
        @user = selected_user
    end

    def update
        @user = selected_user
        if @user && @user.update_attributes(user_params)
            render :show
        elsif !@user
            render json: @user.errors.full_messages, status: 400
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def delete
        @user = selected_user

        if @user 
            @user.destroy
            render :show
        else
            render['Could not find user']
        end
    end

    private 

    def selected_user
        User.find(params[:id])
    end

    def user_params
        params.require(:users).permit(:fname, :lname, :email)
    end
end
