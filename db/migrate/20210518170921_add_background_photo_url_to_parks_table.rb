class AddBackgroundPhotoUrlToParksTable < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :backgroundPhotoUrl, :string
  end
end
