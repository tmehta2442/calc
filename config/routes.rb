Calc::Application.routes.draw do
  root to: "calculators#new"
  resources :calculators

end
