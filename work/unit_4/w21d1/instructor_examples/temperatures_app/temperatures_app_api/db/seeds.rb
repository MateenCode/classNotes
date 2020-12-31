# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Location.create([
  { lat: 40.7128, lng: 74.0059, name: 'New York City' },
  { lat: 78.2232, lng: 15.6267, name: 'LongYearByen' }
])

Temperature.create([
  { average_high_f: 39, average_low_f: 26, location_id: 1 },
  { average_high_f: 50, average_low_f: 40, location_id: 1 },
  { average_high_f: 80, average_low_f: 35, location_id: 1 },
  { average_high_f: 60, average_low_f: 44, location_id: 1 },
  { average_high_f: 71, average_low_f: 55, location_id: 1 },
  { average_high_f: 90, average_low_f: 55, location_id: 1 },
  { average_high_f: 30, average_low_f: 55, location_id: 1 },
  { average_high_f: 1, average_low_f: -20, location_id: 2 }
])