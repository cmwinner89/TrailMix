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
require 'test_helper'

class ParkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
