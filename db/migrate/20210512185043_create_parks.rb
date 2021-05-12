class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :park_name, null: false
      t.text :summary, null: false
      t.text :description
      t.string :contact, null: false
      t.integer :acreage, null: false
      t.timestamps
    end

    add_index :parks, :park_name
  end
end
