
# json.nearby_trails do
    json.array! @nearby_trails do |trail|
    #    json.set! trail.id do
        json.extract! trail, :id, :trail_name, :summary, :description, :length, :elevation_gain, :latitude, :longitude, :route_type, :difficulty, :park_id, :backgroundPhotoUrl
    #    end
    end 
# end