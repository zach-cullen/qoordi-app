Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:show, :create]
    resources :categories, only: [:create]
    resources :projects, only: [:show, :create]
    resources :timeblocks, only: [:create, :update, :destroy]
    post "/login", to: "sessions#create"
    post "/logout", to: "sessions#destroy"
  end
end
