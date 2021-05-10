class AddColumnstoUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
    add_column :users, :email, :string, null: false
    add_column :users, :password_digest, :string, null: false
    add_column :users, :session_token, :string, null: false

    add_index :users, :email
    add_index :users, :session_token
  end
end
