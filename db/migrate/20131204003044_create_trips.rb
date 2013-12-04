class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.boolean :complete

      t.timestamps
    end
  end
end
