class CreateCommodities < ActiveRecord::Migration[6.0]
  def change
    create_table :commodities do |t|
      t.string :name
      t.decimal :price, precision: 8, scale: 2

      t.timestamps
    end
  end
end
