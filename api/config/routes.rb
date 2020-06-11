Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:show, :create, :update, :delete]
  end
end
