# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  post_date  :date             not null
#  caption    :string
#  user_id    :integer          not null
#  trail_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  park_id    :integer          not null
#
class Photo < ApplicationRecord

    validates :user_id, :trail_id, :park_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :trail,
        primary_key: :id,
        foreign_key: :trail_id,
        class_name: :Trail

    belongs_to :park,
        primary_key: :id,
        foreign_key: :park_id,
        class_name: :Park

    has_one_attached :photo

end
