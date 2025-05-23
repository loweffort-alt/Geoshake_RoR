class Feature < ApplicationRecord
  self.inheritance_column = :event_type_column_name
  has_many :comments, dependent: :destroy

  # Validaciones
  validates :title, :place, :latitude, :longitude, :depth, presence: true
  validates :magnitude, numericality: { greater_than_or_equal_to: -1.0, less_than_or_equal_to: 10.0 }
  validates :longitude, numericality: { greater_than_or_equal_to: -90.0, less_than_or_equal_to: 90.0 }
  validates :latitude, numericality: { greater_than_or_equal_to: -180.0, less_than_or_equal_to: 180.0 }

end
