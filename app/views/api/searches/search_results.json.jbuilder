trails = json.array! @trails do |trail|
    json.extract! trail, :id, :trail_name
    json.category trail.class.trail_name
end

parks = json.array! @parks do |park|
    json.extract! park, :id, :park_name
    json.category park.class.park_name
end

trails + parks