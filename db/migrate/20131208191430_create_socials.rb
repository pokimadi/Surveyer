class CreateSocials < ActiveRecord::Migration
  def change
    create_table :socials do |t|
     	t.string :gender
		t.string :session_age
		t.string :status
		t.string :employStat
		t.string :occupation
		t.string :session_otherOccupation
		t.string :session_personCount
		t.string :lisence
		t.string :transitPass
		t.string :session_otherTpass
		t.string :houseType
		t.string :session_otherHtype
		t.string :session_veichleCount
		t.string :yearIncome
      t.timestamps
    end
  end
end
