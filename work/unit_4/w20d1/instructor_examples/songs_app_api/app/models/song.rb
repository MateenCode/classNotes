class Song < ApplicationRecord
    validates :artist_name, presence: true, on: :create
    validates :title, presence: true, on: :update
end