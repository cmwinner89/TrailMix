class AddColumnToParks < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :park_type, :string, null: false
  end
end
