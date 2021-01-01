class Trader < ApplicationRecord
    has_many :ledgers
    has_many :commodities, through: :ledgers
end
