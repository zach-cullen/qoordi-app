class Api::UsersController < ApplicationController

  def create
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render json: @user, except: [:password_digest, :created_at, :updated_at]
    else 
      render json: invalid_request
    end
  end

  def update
  end

  def destroy
  end

  private

  def invalid_request(args)
    { errors: ["Invalid request."]}
  end

end
