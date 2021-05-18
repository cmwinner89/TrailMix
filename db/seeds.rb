# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

# demo = User.create (
#     fname: 'demo',
#     lname: 'demo',
#     email: 'demo@trailmix.com',
#     password: 'password'
# )

demo = User.create(fname: "Demo", lname: "User", email: "demo@trailmix.com", password: "password")

Park.destroy_all

park1 = Park.create(park_name: "Shenandoah National Park", summary: "Look for a great get away!  Come visit Shenandoah National Park, Virginia.",
                    description: "Look for a great get away!  Come visit Shenandoah National Park, Virginia.  We have 247 amazing hiking trails!", contact: "540-999-3500", acreage: 197439, park_type: 'national', backgroundPhotoUrl: "http://static-30.sinclairstoryline.com/resources/media/2843c028-8ae5-4c25-9ca7-b45a82859d60-large16x9_StonyManFromSkylineDrive.jpg?1537836157049" )

Trail.destroy_all

trail1 = Trail.create(trail_name: "Old Rag Mountain Loop", summary: "Old Rag Mountain Loop is a 9.5 mile loop trail.  Near Etlan Virginia that has rivers and is a difficult trail.  Best to to 
                      go is from May - October", description: "If you enter by vehicle Shenandoah Nation Park will charge you a fee.  If you enter by foot or bike there will be no
                      charge.  Annual pass are available aswell!", length: 9.5, elevation_gain: 2683, latitude: 38.17557607, longitude: -77.67188868, route_type: 'Loop',
                      difficulty: 'hard', park_id: 1, backgroundPhotoUrl: "https://4.bp.blogspot.com/-tuNYm4xUOTU/T2Pr95aql5I/AAAAAAAAARA/nSL6dJDuLXo/s1600/10-+October+Old+Rag.jpg"
                    )

trail2 = Trail.create(trail_name: "White Oak Canyon and Cedar Run Trail Loop", summary: "This trail is a 9 mile loop with moderate to heavy traffic.  It is located near Syria, Virginia and is not a trail for 
                      beginners.  Features a lovely waterfall.  Is a big hiking and backpacking trail",  description: "If you enter by vehicle Shenandoah Nation Park will charge you a fee.  If you enter by foot or bike there will be no
                      charge.  Annual pass are available as well!", length: 9, elevation_gain: 2372, latitude: 38.5398462, longitude: -78.355838,  route_type: "Loop", difficulty: "hard", park_id: park1.id, backgroundPhotoUrl: "http://lets-see-america.com/wp-content/uploads/2018/10/Whiteoak-Canyon-Falls-6-web.jpg"
                      )

Review.destroy_all

review1 = Review.create(post_date: "2018-07-22", rating: 5, review: "The view from the summit was amazing!", user_id: demo.id, trail_id: trail1.id)