class CreateCharactersAgains < ActiveRecord::Migration[6.0]
  def change
    create_table :characters_agains do |t|
      t.string :name
      t.string :description
      t.string :img_url
    end
  end
end t.string :name
t.string :description
t.string :img_url
