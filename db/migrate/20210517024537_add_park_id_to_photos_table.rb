class AddParkIdToPhotosTable < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :park_id, :integer, null: false
    add_index :photos, :park_id
  end
end
