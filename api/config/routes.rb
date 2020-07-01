Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:show, :create, :update, :delete]
    resources :categories, only: [:create]
    resources :projects, only: [:show, :create]
    resources :timeblocks, only: [:create]
    post "/login", to: "sessions#create"
    post "/logout", to: "sessions#destroy"
  end
end
