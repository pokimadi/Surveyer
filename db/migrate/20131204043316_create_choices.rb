class CreateChoices < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.string :person
      t.string :expected_time
      t.string :choice
      t.string :confidence
      t.string :condition

      t.timestamps
    end
  end
end
