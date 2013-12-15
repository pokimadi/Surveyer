class AddPersonRefToTrips < ActiveRecord::Migration
  def change
    add_reference :trips, :person, index: true
  end
end
