json.array! @trails_in_park do |trail|
    json.extract! trail, :id, :trail_name, :summary, :description, :length, :elevation_gain, :latitude, :longitude, :route_type, :difficulty, :park_id
end