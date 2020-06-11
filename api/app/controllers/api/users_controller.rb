class Api::UsersController < ApplicationController

  def create
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user, except: [:password_digest, :created_at, :updated_at]
  end

  def update
  end

  def destroy
  end
end
