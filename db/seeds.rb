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
user3 = User.create(fname: 'Sean', lname: 'Winner', email: 'hikes@hikes.com', password: 'password')
user4 = User.create(fname: "Richie", lname: "Gauteraux", email: 'hikesalot@hikes.com', password: 'password')

Park.destroy_all

park1 = Park.create(park_name: "Shenandoah National Park", summary: "Look for a great get away!  Come visit Shenandoah National Park, Virginia.",
                    description: "Look for a great get away!  Come visit Shenandoah National Park, Virginia.  We have 247 amazing hiking trails!", contact: "540-999-3500", acreage: 197439, park_type: 'national', backgroundPhotoUrl: "http://static-30.sinclairstoryline.com/resources/media/2843c028-8ae5-4c25-9ca7-b45a82859d60-large16x9_StonyManFromSkylineDrive.jpg?1537836157049",
                    lat: 38.700516, lng: -78.292694 
                    )

park2 = Park.create(park_name: 'Yellow Stone National Park', summary: "Looking for a great trail in Yellowstone National Park, Wyoming? AllTrails has 253 great hiking trails, trail running trails, mountain biking trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Ready for some activity? There are 118 moderate trails in Yellowstone National Park ranging from 0.8 to 49.5 miles and from 0 to 10,255 feet above sea level. Start checking them out and you'll be out on the trail in no time!",
                    description: "Yellowstone National Park is America's first national park. Its landscape is vast spanning three states: Wyoming, Montana and Idaho. The park is home to a variety of wildlife including grizzly bears, wolves, bison, and elk. Yellowstone is most famous for Old Faithful and a collection of the world's most extraordinary geysers and hot springs.", contact: '307-344-7381', acreage: 2219790, park_type: 'national',
                    backgroundPhotoUrl: "https://www.discoverwalks.com/blog/wp-content/uploads/2020/10/yellowstone-national-park-1589616_1280.jpg", lat: 43.4799, lng: -110.7624
                    )

Trail.destroy_all

trail1 = Trail.create(trail_name: "Old Rag Mountain Loop", summary: "Old Rag Mountain Loop is a 9.5 mile loop trail.  Near Etlan Virginia that has rivers and is a difficult trail.  Best to to 
                      go is from May - October", description: "If you enter by vehicle Shenandoah Nation Park will charge you a fee.  If you enter by foot or bike there will be no
                      charge.  Annual pass are available aswell!", length: 9.5, elevation_gain: 2683, latitude: 38.17557607, longitude: -77.67188868, route_type: 'Loop',
                      difficulty: 'hard', park_id: 1, backgroundPhotoUrl: "https://4.bp.blogspot.com/-tuNYm4xUOTU/T2Pr95aql5I/AAAAAAAAARA/nSL6dJDuLXo/s1600/10-+October+Old+Rag.jpg"
                    )

trail2 = Trail.create(trail_name: "White Oak Canyon and Cedar Run Trail Loop", summary: "White Oak Canyon and Cedar Run Trail Loop is a 9 mile loop with moderate to heavy traffic.  It is located near Syria, Virginia and is not a trail for 
                      beginners.  Features a lovely waterfall.  Is a big hiking and backpacking trail",  description: "If you enter by vehicle Shenandoah Nation Park will charge you a fee.  If you enter by foot or bike there will be no
                      charge.  Annual pass are available as well!", length: 9, elevation_gain: 2372, latitude: 38.5398462, longitude: -78.355838,  route_type: "Loop", difficulty: "hard", park_id: park1.id, backgroundPhotoUrl: "http://lets-see-america.com/wp-content/uploads/2018/10/Whiteoak-Canyon-Falls-6-web.jpg"
                    )

trail3 = Trail.create(trail_name: 'Upper Geyser Basin and Old Faithful Observation Point Loop', summary: "Upper Geyser Basin and Old Faithful Observation Point Loop is a 4.9 mile loop with heavy traffic.  It is located in Yellow 
                        Stone National Park, Wyoming.  It has features such as hots springs in is a moderate trail.", description: "Subject to closure due to wildlife activity.", length: 4.9, elevation_gain: 357, latitude: 44.4605, longitude: -90.0000, route_type: "Loop", difficulty: "moderate", park_id: park2.id, 
                        backgroundPhotoUrl: "https://www.americansouthwest.net/wyoming/photographs1118/observation2.jpg"
                      )

trail4 = Trail.create(trail_name: "Mathews Arm Overall Run Trail", summary: 'Mathews Arm Overall Run Trail is a 8.9 mile moderately trafficked loop trail located near Rileyville, Virginia that features a waterfall and is rated as difficult. The trail offers a number of activity options and is accessible year-round. 
                        Dogs are also able to use this trail but must be kept on leash.', description: "If you enter by vehicle Shenandoah Nation Park will charge you a fee.  If you enter by foot or bike there will be no
                        charge.  Annual pass are available aswell!", length: 8.9, elevation_gain: 2408, latitude: 38.7624, longitude: -78.2966, route_type: "Loop", difficulty: "hard", park_id: park1.id,
                        backgroundPhotoUrl: "https://live.staticflickr.com/8564/16119850419_e3fcfbd977_b.jpg"
                      )

trail5 = Trail.create(trail_name: "Grand Prismatic Hot Spring", summary: 'Grand Prismatic Hot Spring is a 1.6 mile heavily trafficked out and back trail located near Yellowstone National Park, Wyoming that features hot springs and is good for all skill levels. The trail is primarily used for walking.',
                        description: "Subject to closure due to wildlife activity.", length: 1.6, elevation_gain: 200, latitude: 44.5252108, longitude: -90.0, route_type: 'Out and back', difficulty: "easy", park_id: park2.id,
                        backgroundPhotoUrl: "https://fullsuitcase.com/wp-content/uploads/2019/02/Seeing-the-Grand-Prismatic-Spring-is-one-of-the-must-do-things-in-Yellowstone.jpg"
                      )
trail6 = Trail.create(trail_name: "Mystic Falls, Fairy Creek and Little Firehole Loop", summary: "Mystic Falls, Fairy Creek and Little Firehole Loop is a 3.5 mile heavily trafficked loop trail located near Yellowstone National Park, Wyoming that features a waterfall and is rated as moderate.",
                        description: "Subject to closure due to wildlife activity.", length: 3.5, elevation_gain: 606, latitude: 44.483831398, longitude: -90.0, route_type: 'Loop', difficulty: "moderate", park_id: park2.id,
                        backgroundPhotoUrl: "https://i.pinimg.com/originals/dc/1a/54/dc1a5413e34c7c090015045fc45a5013.jpg"
                      )
trail7 = Trail.create(trail_name: "Hawksbill Gap Loop", summary: "Hawksbill Gap Loop via Appalachian Trail is a 2.6 mile heavily trafficked loop trail located near Syria, Virginia that features beautiful wild flowers and is rated as moderate.",
                        description:  "If you enter by vehicle Shenandoah Nation Park will charge you a fee.  If you enter by foot or bike there will be no
                        charge.  Annual pass are available aswell!", length: 2.6, elevation_gain: 751, latitude: 38.55500, longitude: -78.395, route_type: 'Loop', difficulty: "moderate", park_id: park1.id,
                        backgroundPhotoUrl: "https://www.hikingupward.com/SNP/HawksbillTimberHollow/images/060317/DSC07610.jpg"  
                      )
Review.destroy_all

review1 = Review.create(post_date: "2018-07-22", rating: 5, review: "The view from the summit was amazing!", user_id: demo.id, trail_id: trail1.id)
review2 = Review.create(post_date: '2013-04-15', rating: 5, review: "What an amazing hike!", user_id: user1.id, trail_id: trail3.id)
review3 = Review.create(post_date: "2017-7-19", rating: 2, review: "Absolutely terrible. 100% do not recommend", user_id: user2.id, trail_id: trail3.id)
review4 = Review.create(post_date: '2016-1-10', rating: 4, review: "Had an amazing time.  Would've been even better if there wasn't so much traffic on the trail.  Still amzaing!!!", user_id: user4, trail_id: trail3.id)
review5 = Review.create(post_date: '2020-8-19', rating: 5, review: "It was so much fun I don't even care that I broke my foot.", user_id: user4.id, trail_id: trail1.id)
review6 = Review.create(post_date: '2020-9-30', rating: 5, review: "Was my favorite trail in the park by far!  Had a great time the rock scramble was my favorite part!", user_id: user2.id, trail_id: trail1.id)
review7 = Review.create(post_date: '2010-6-14', rating: 1, review: "Everything sucked.  The waterfall sucked. The trail sucked. It all sucked.", user_id: demo.id, trail_id: trail2.id)
review8 = Review.create(post_date: '2011-8-10', rating: 4, review: "It was a very nice trail.  Not to tough, not to easy.  The waterfall was so nice, was definitely my favorite part!", user_id: user1.id, trail_id: trail2.id)
review9 = Review.create(post_date: '2020-4-21', rating: 3, review: "It was nice, nothing special.  You've seen one waterfall you've seen them all", user_id: user3.id, trail_id: trail2.id)
review10 = Review.create(post_date: '2017-6-22', rating: 5, review: "It was amazing.  I got to see the gyser shoot off.  HAven't seen anything like that before in my life!", user_id: user3.id, trail_id: trail3.id)
review11 = Review.create(post_date: '2015-4-13', rating: 5, review: "Amazing hike.  Would 10/10 recommend", user_id: demo.id, trail_id: trail3.id)
review12 = Review.create(post_date: '2017-6-22', rating: 3, review: "It was alrgiht", user_id: user4.id, trail_id: trail4.id)
review13 = Review.create(post_date: '2013-4-20', rating: 5, review: "I had so much fun, I can't wait to come back and do the trail again!", user_id: user1.id, trail_id: trail4.id)
review14 = Review.create(post_date: '2011-6-18', rating: 5, review: "Amazing hike!", user_id: demo.id, trail_id: trail4.id)
review15 = Review.create(post_date: '2010-5-20', rating: 1, review: "I hated it! >:|", user_id: user4.id, trail_id: trail7.id)
review16 = Review.create(post_date: '2010-8-22', rating: 5, review: "Such an amazing hike!", user_id: user2.id, trail_id: trail7.id)
review17 = Review.create(post_date: '2020-9-15', rating: 2, review: "Such a bad hike", user_id: demo.id, trail_id: trail5.id)
review18 = Review.create(post_date: '2013-6-20', rating: 5, review: "What an amazing hike! I can't wait to hit it again!!", user_id: user1.id, trail_id: trail6.id)