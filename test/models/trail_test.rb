# == Schema Information
#
# Table name: trails
#
#  id             :bigint           not null, primary key
#  trail_name     :string           not null
#  summary        :text             not null
#  description    :text
#  length         :integer          not null
#  elevation_gain :integer          not null
#  latitude       :integer          not null
#  longitude      :integer          not null
#  route_type     :string           not null
#  difficulty     :string           not null
#  park_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require 'test_helper'

class TrailTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
