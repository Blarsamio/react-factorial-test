class Metric < ApplicationRecord
  validates :name, presence: true
  validates :value, presence: true, numericality: true, length: { maximum: 10 }
  validates :date, presence: true
end
