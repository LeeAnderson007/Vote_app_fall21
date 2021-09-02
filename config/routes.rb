Rails.application.routes.draw do
  resources :items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
root 'items#app'

get '/items', to: 'items#index'
# get '/items', to: 'items#new';  # we dont need this for this project
post '/items', to: 'items#create'

delete '/items/:id', to: 'items#destroy'
end
