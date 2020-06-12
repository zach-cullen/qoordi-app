Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:show, :create, :update, :delete]
    post "/login", to: "sessions#create"
    post "/logout", to: "sessions#destroy"
  end
end
