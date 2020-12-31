class AddForeignKeyToAverages < ActiveRecord::Migration[6.0]
  def change
    add_column :averages, :stock_id, :integer
  end
end
