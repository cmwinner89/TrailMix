json.array! @reviews do |review|
    json.extract! review, :id, :post_date, :rating, :review, :trail_id, :user_id, :user
end