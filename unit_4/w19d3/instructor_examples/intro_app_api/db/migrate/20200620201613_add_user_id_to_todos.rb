class AddUserIdToTodos < ActiveRecord::Migration[6.0]
  def change
    add_column :todos, :user_id, :integer
  end
end
