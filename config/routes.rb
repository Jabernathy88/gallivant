Rails.application.routes.draw do
  get "api/cities/:id/posts", to: "api/posts#index"
  
  namespace :api do
    
    resources :users
    resources :cities
    resources :posts
  end
end
