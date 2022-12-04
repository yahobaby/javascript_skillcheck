Rails.application.routes.draw do
  root 'articles#index'
  resources :articles
  # resources :articles, except: :create #①ー6アラートを出すための準備、投稿時にcreateアクションへのルーティングが見つからず、404のエラーが出る。エラー確認後、削除

end
