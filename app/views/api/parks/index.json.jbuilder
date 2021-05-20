json.array! @parks do |park|
    json.extract! park, :id, :park_name
end