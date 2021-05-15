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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
