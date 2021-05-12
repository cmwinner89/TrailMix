class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :trail_name, null: false
      t.text :summary, null: false
      t.text :description
      t.integer :length, null: false
      t.integer :elevation_gain, null: false
      t.integer :latitude, null: false
      t.integer :longitude, null: false
      t.string :route_type, null: false
      t.string :difficulty, null: false
      t.integer :park_id, null: false
      t.timestamps
    end
    add_index :trails, :trail_name
    add_index :trails, :park_id
  end
end
