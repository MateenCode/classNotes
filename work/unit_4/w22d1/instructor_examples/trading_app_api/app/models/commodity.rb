class Commodity < ApplicationRecord
    has_many :ledgers
    has_many :traders, through: :ledgers
end
