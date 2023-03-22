Rails.application.routes.draw do
  root 'metrics#index'
  resources :metrics
  get 'json', to: 'metrics#json'
  get 'monthly_average', to: 'metrics#monthly_average'
  get 'daily_average', to: 'metrics#daily_average'
  get 'weekly_average', to: 'metrics#weekly_average'
  get 'yearly_average', to: 'metrics#yearly_average'
end
