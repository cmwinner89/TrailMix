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
class Trail < ApplicationRecord
    validates :route_type, inclusion: { in: ['Loop', 'Out and back', 'Point to point']}
    validates :difficulty, inclusion: { in: ['easy', 'moderate', 'difficult', 'hard' ]}
    validates :trail_name, :summary, :length, :elevation_gain, :latitude, :longitude, :park_id

    belongs_to :park,
        primary_key: :id,
        foreign_key: :park_id,
        class_name: :Park
 
end
