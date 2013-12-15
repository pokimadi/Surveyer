class AddPersonRefToSocials < ActiveRecord::Migration
  def change
    add_reference :socials, :person, index: true
  end
end
