class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.date :post_date, null: false
      t.string :caption
      t.integer :user_id, null: false
      t.integer :trail_id, null: false
      t.timestamps
    end
    add_index :photos, :user_id
    add_index :photos, :trail_id
  end
end
