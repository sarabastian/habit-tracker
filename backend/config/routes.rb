Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :habits
      resources :categories
      resources :days
    end
  end
end
