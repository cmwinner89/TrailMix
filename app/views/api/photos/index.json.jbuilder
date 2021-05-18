json.array! @photos do |photo|
    json.extract! photo, :id, :user_id, :trail_id
    json.photoUrl url_for(photo.photo)
end