class CreateCarSpecs < ActiveRecord::Migration
  def change
    create_table :car_specs do |t|
    	t.string :carType
		t.string :session_carMake
		t.string :session_carModel
		t.string :session_carYear
		t.string :carFuel
    	t.timestamps
    end
  end
end
