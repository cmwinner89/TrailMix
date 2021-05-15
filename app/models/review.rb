# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  post_date  :date             not null
#  rating     :integer          not null
#  review     :text             not null
#  user_id    :integer          not null
#  trail_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord

    validates :post_date, :rating, :review, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :trail,
        primary_key: :id,
        foreign_key: :trail_id,
        class_name: :Trail

end
