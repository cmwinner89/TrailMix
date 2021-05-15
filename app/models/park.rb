# == Schema Information
#
# Table name: parks
#
#  id          :bigint           not null, primary key
#  park_name   :string           not null
#  summary     :text             not null
#  description :text
#  contact     :string           not null
#  acreage     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  park_type   :string           not null
#
class Park < ApplicationRecord

  validates :park_type, inclusion: {in: ['state', 'national', 'recreational']}
  validates :summary, :contact, :acreage, :park_type, presence: true

  has_many :trails,
    primary_key: :id,
    foreign_key: :park_id,
    class_name: :Trail
end
