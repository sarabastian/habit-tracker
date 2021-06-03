Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :habits
      resources :categories
      resources :days
      resources :daily_habits
    end
  end
end
