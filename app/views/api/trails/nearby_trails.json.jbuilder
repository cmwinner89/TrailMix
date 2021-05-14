json.array! @nearby_trails do |trail|
   json.set! :id do
    json.extract! trail, :id, :trail_name, :summary, :description, :length, :elevation_gain, :latitude, :longitude, :route_type, :difficulty, :park_id
   end
end 