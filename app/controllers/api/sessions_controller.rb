class Api::UsersController < ApplicationRecord 


    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user.nil?
            render json: ['Invalid username or password'], status: 401
        else
            login!(@user)
            render '/api/users/show'
        end
    end

    def logout!
        logout!
        render json: {message: 'Logout was successful'}
    end
end