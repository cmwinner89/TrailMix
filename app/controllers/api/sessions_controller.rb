class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create 
        # debugger
        # params.require(:user).permit(:email, :password)
        # @user = User.find_by_credentials(params[:email], params[:password])
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        # debugger
        if @user.nil?
            render json: ["Invalid username or password"], status: 401
        else
            login!(@user)
            render '/api/users/show'
        end
    end

    def destroy
        logout!
        render json: {message: 'Logout was successful'}
    end

    # private 

    # def session_params
    #     params.require(:user).permit(:email, :password)
    # end
end