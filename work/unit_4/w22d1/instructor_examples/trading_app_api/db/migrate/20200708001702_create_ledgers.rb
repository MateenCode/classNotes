class CreateLedgers < ActiveRecord::Migration[6.0]
  def change
    create_table :ledgers do |t|
      t.references :trader, null: false, foreign_key: true
      t.references :commodity, null: false, foreign_key: true
      t.integer :qty

      t.timestamps
    end
  end
end
