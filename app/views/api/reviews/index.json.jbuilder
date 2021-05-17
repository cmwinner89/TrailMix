json.array! @reviews do |review|
    json.extract! :id, :post_date, :review, :trail_id, :user_id, :user
end