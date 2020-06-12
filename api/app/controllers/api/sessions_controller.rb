class Api::SessionsController < ApplicationController

  def login
    @user = User
      .find_by(email: params[:user][:email])
      .try(:authenticate, params[:user][:password])

    if @user
      session[:user_id] = @user.id

      render json: {
        authenticated: true,
        user: @user.as_json(only: [:id])
      }
    else 
      reset_session
      render json: login_error
    end

  end

  private 

  def login_error
    { errors: ["Unable to login with the provided email & password. Please sign up or try again."]}
  end

end