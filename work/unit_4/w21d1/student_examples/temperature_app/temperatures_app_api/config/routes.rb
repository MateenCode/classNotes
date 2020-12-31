Rails.application.routes.draw do
  resources :temperatures, only: [:index] 
    resources :locations, only: [:index, :show] do
    resources :temperatures, only: [:create]
    end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
