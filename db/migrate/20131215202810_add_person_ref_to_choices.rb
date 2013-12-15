class AddPersonRefToChoices < ActiveRecord::Migration
  def change
    add_reference :choices, :person, index: true
  end
end
