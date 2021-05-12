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

Trail.destroy_all

trail1 = Trail.create(trail_name: "Old Rag Mountain Loop", summary: "beautiful trail", description: 'pay for parking, free if on foot',
                      length: 9.5, elevation_gain: 2683, latitude: 38.17557607, longitude: -77.67188868, route_type: 'Loop',
                      difficulty: 'hard', park_id: park1.id
                       )