class Park < ApplicationRecord

  validates :park_type, inclusion: {in: ['state', 'national', 'recreational']}
  validates :summary, :contact, :acreage, :park_type, presence: true

  has_many :trails,
    primary_key: :id,
    foreign_key: :park_id,
    class_name: :Trail
end
