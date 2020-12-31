class AddColumnToTodos < ActiveRecord::Migration[6.0]
  def change
    add_column :todos, :title, :string
    add_column :todos, :completed, :boolean
  end
end
