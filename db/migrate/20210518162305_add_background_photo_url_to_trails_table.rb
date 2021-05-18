class AddBackgroundPhotoUrlToTrailsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :backgroundPhotoUrl, :string
  end
end
