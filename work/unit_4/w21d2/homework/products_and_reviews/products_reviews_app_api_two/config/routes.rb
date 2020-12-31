Rails.application.routes.draw do

  resources :products, only: [:index, :show] do
  resources :reviews, except: [:show]
  end

  resources :reviews, only: [:update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
