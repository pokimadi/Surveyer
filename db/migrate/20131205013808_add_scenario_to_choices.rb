class AddScenarioToChoices < ActiveRecord::Migration
  def change
    add_column :choices, :scenario, :string
  end
end
