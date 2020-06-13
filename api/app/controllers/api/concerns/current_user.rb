module Api::Concerns::CurrentUser
  extend ActiveSupport::Concern

  included do
    before_action :get_current_user
  end

  def get_current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
  
end