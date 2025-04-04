class CleanUpFeaturesTable < ActiveRecord::Migration[7.1]
  def change
    remove_column :features, :depth, :float

    remove_column :features, :tsunami, :boolean
    remove_column :features, :mag_type, :string
    remove_column :features, :external_url, :string

    add_column :features, :depth, :float
  end
end
