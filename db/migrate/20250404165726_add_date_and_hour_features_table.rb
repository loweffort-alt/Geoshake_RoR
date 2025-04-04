class AddDateAndHourFeaturesTable < ActiveRecord::Migration[7.1]
  def change
    add_column :features, :date, :string
    add_column :features, :hour, :string
  end
end
