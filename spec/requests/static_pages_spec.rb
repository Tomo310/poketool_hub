require 'spec_helper'

describe "Static Pages" do
	
	describe "Home page" do
		# 下層にテストが存在している階層でしかbwforeは使えない模様（下層に何も無いような階層で使っても確かに意味薄いが）。
		before { visit root_path }

		it "should have the title 'Poketool Hub'" do
			expect(page).to have_title('Poketool Hub')
			expect(page).not_to have_title('|')
		end

		it "should have the content 'Poketool Hub'" do
			expect(page).to have_content('Poketool Hub')
		end
	end
end