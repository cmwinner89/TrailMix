class ChangeLatAndLongDataType < ActiveRecord::Migration[5.2]
  def change
    change_column :trails, :latitude, :float
    change_column :trails, :longitude, :float
  end
end
