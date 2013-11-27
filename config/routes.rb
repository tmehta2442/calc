Calc::Application.routes.draw do
  root to: "calculators#new"
  resources :calculators

  get "/plus", to: "calculators#plus"
  get "/minus", to: "calculators#minus"
  get "/multiply", to: "calculators#multiply"
  get "/divide", to: "calculators#divide"

end
