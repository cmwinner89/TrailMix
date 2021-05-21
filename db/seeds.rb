# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create(fname: "Demo", lname: "User", email: "demo@trailmix.com", password: "password")
user1 = User.create(fname: 'Collin', lname: "Winner", email: "cwinn89@gmail.com", password: "password")
user2 = User.create(fname: 'Matt', lname: 'Hand', email: 'hiker@hikes.com', password: 'password')

Park.destroy_all

park1 = Park.create(park_name: "Shenandoah National Park", summary: "Look for a great get away!  Come visit Shenandoah National Park, Virginia.",
                    description: "Look for a great get away!  Come visit Shenandoah National Park, Virginia.  We have 247 amazing hiking trails!", contact: "540-999-3500", acreage: 197439, park_type: 'national', backgroundPhotoUrl: "http://static-30.sinclairstoryline.com/resources/media/2843c028-8ae5-4c25-9ca7-b45a82859d60-large16x9_StonyManFromSkylineDrive.jpg?1537836157049",
                    lat: 38.700516, lng: -78.292694 
                    )

park2 = Park.create(park_name: 'Yellow Stone National Park', summary: "Looking for a great trail in Yellowstone National Park, Wyoming? AllTrails has 253 great hiking trails, trail running trails, mountain biking trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Ready for some activity? There are 118 moderate trails in Yellowstone National Park ranging from 0.8 to 49.5 miles and from 0 to 10,255 feet above sea level. Start checking them out and you'll be out on the trail in no time!",
                    description: "Yellowstone National Park is America's first national park. Its landscape is vast spanning three states: Wyoming, Montana and Idaho. The park is home to a variety of wildlife including grizzly bears, wolves, bison, and elk. Yellowstone is most famous for Old Faithful and a collection of the world's most extraordinary geysers and hot springs.", contact: '307-344-7381', acreage: 2219790, park_type: 'national',
                    backgroundPhotoUrl: "https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/image/2016/09/main/canyon-trail_0.jpg", lat: 43.4799, lng: -110.7624
                    )

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

trail3 = Trail.create(trail_name: 'Upper Geyser Basin and Old Faithful Observation Point Loop', summary: "Upper Geyser Basin and Old Faithful Observation Point Loop is a 4.9 mile loop with heavy traffic.  It is located in Yellow 
Stone National Park, Wyoming.  It has features such as hots springs in is a moderate trail.", description: "Subject to closure due to wildlife activity.", length: 4.9, elevation_gain: 357, latitude: 44.4605, longitude: -90.0000, route_type: "Loop", difficulty: "moderate", park_id: park2.id, backgroundPhotoUrl: "https://www.frommers.com/system/media_items/attachments/000/866/576/s980/Castle_Geyser__Yellowstone.jpg?1611951309")

Review.destroy_all

review1 = Review.create(post_date: "2018-07-22", rating: 5, review: "The view from the summit was amazing!", user_id: demo.id, trail_id: trail1.id)
review2 = Review.create(post_date: '2013-04-15', rating: 5, review: "What an amazing hike!", user_id: user1.id, trail_id: trail3.id)