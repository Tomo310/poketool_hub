source 'https://rubygems.org'
ruby '2.0.0'
#ruby-gemset=railstutorial_rails_4_0

gem 'rails', '4.1.5'
gem 'pg'
# bcrypt:パスワードの暗号化に使うらしい
gem 'bcrypt'
# faker:実際にありそうなサンプルユーザを自動作成するためのgem（チュートリアル9章参照）。ただし今回は使わないかも？
gem 'faker'
# will_paginate:その名のとおりページネーション用のgem。bootstrapを使わない場合のカスタマイズについては要調査。
gem 'will_paginate'

group :development, :test do
	gem 'rspec-rails'
#	gem 'spork-rails', '4.0.0'
#	gem 'guard-spork', '1.5.0'
#	gem 'childprocess', '0.3.6'
end

group :test do
	# selenium-webdriver:capybaraがこれに依存しているらしいので。
	gem 'selenium-webdriver'
	gem 'capybara'
	gem 'factory_girl_rails'
#	gem 'rb-notifu', '0.0.4'
#	gem 'win32console', '1.3.2'
end

gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.0.0'
gem 'jquery-rails'
gem 'turbolinks'
gem 'jbuilder', '~> 2.0'

group :doc do
	gem 'sdoc', '~> 0.4.0', require: false
end

group :production do
	# heroku使うのに必要らしい
	gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin]