class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.integer :price
      t.string :symbol

      t.timestamps
    end
  end
end
