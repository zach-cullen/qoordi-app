class Api::SessionsController < ApplicationController

  def login
    byebug
    render json: { message: "I hear you"}
  end

end