# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_23_211837) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "img_url"
    t.integer "vehicle_id"
  end

  create_table "characters_agains", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "img_url"
  end

  create_table "vehicle_id_to_vehicles", force: :cascade do |t|
  end

  create_table "vehicles", force: :cascade do |t|
    t.string "name"
    t.string "style"
  end

end
