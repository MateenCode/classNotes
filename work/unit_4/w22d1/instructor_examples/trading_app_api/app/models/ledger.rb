class Ledger < ApplicationRecord
  belongs_to :trader
  belongs_to :commodity
end
