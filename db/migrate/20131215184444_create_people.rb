class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :remember_token

      t.timestamps
    end
  end
end
