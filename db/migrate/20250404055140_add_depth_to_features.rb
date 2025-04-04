class AddDepthToFeatures < ActiveRecord::Migration[7.1]
  def change
    add_column :features, :depth, :float
  end
end
