Rails.application.routes.draw do
  #get 'api/index'
  root 'home#index'
  #resources :api, only: [:index]
  get '/data_saver', to: 'local_data_saver#save_data_from_local'
  namespace :api do
    resources :features, only: [:index, :show] do
      resources :comments, only: [:index, :create, :destroy]
    end
  end
end
