class Song < ApplicationRecord
    validates :artist_name, presence: true
end