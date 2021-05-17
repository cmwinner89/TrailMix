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
                    description: "Look for a great get away!  Come visit Shenandoah National Park, Virginia.  We have 247 amazing hiking trails!", contact: "540-999-3500", acreage: 197439, park_type: 'national' )

Trail.destroy_all

trail1 = Trail.create(trail_name: "Old Rag Mountain Loop", summary: "beautiful trail", description: 'pay for parking, free if on foot',
                      length: 9.5, elevation_gain: 2683, latitude: 38.17557607, longitude: -77.67188868, route_type: 'Loop',
                      difficulty: 'hard', park_id: 1
                    )

trail2 = Trail.create(trail_name: "White Oak Canyon and Cedar Run Trail Loop", summary: "This trail is a 9 mile loop with moderate to heavy traffic.  It is located near Syria, Virginia and is not a trail for 
                      beginners.  Features a lovely waterfall.  Is a big hiking and backpacking trail",  description: "If you enter by vehicle Shenandoah Nation Park will charge you a fee.  If you enter by foot or bike there will be no
                      charge.  Annual pass are available as well!", length: 9, elevation_gain: 2372, latitude: 38.5398462, longitude: -78.355838,  route_type: "Loop", difficulty: "hard", park_id: park1.id
                      )