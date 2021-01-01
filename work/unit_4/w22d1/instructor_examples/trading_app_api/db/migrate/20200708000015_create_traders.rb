class CreateTraders < ActiveRecord::Migration[6.0]
  def change
    create_table :traders do |t|
      t.string :name
      t.decimal :money, precision: 8, scale: 2

      t.timestamps
    end
  end
end
