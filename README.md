# TrailMix

#### [Live Site](https://trail-mix-app.herokuapp.com/#/)


## About

TrailMix is an Alltrails.com clone, users are able to search for their favorite trails or national parks.  The user can access the parks show page to find a brief summary of the hike as well as some of the trails in the park.  The user is also able to access the trail show page for each individual trail.  On the trail show page the user will have access to detailed information about the trails, such as, legnth of the trail, elevation gain, route type and a map of the trail.  A user can read reviews of other hikers who've done the trail, as well as write their own review or delete it.

TrailMix backend is built using Ruby on Rails framework and PostgreSql database.  The frontend of the site is built with React, using Redux to manage the frontend state.  Jquery $.ajax() function is used for all the AJAX.


## Features 

## Finding trails within park and nearby trails

On TrailMix the user will be able to travel to the parks show page.  There much info will be displayed about the park.  The user will also be given some information about the trails within the park and on a click will be able to travel to that trails show page.  I passed in a `park_id` to each trail and was able to extract the trails that had the same
`park_id` as the `id` of the park. I was able to use the same logic for my nearby trails as well.

### Trails in park
![Screenshot 2021-05-21 095548](https://user-images.githubusercontent.com/24721324/119148914-f955d500-ba1a-11eb-8099-d35f40487963.png)

### Nearby trails
![Screenshot 2021-05-21 100019](https://user-images.githubusercontent.com/24721324/119149272-5e112f80-ba1b-11eb-8ae4-de9a955d8af9.png)


## Search for parks and trails

On trailMix the user is able to search for their favorite park or trail.  The search has a filter feature, when the user starts typing a park or trail it will excludes the parks or trails that do not share the same characters as the trail or park being searched.

### Grab trails and parks to populate dropdown
 ![Screenshot 2021-05-21 100404](https://user-images.githubusercontent.com/24721324/119149877-eb548400-ba1b-11eb-8e31-5233bd272a31.png)
 
### Filters the trails and parks to only show what is included in search
![Screenshot 2021-05-21 100559](https://user-images.githubusercontent.com/24721324/119150331-569e5600-ba1c-11eb-9888-974e600b00e3.png)

### Directs the user to the park/trail page on enter or click.  If names not complete it will send the user to the first element in the filter array

![Screenshot 2021-05-21 100904](https://user-images.githubusercontent.com/24721324/119150603-982f0100-ba1c-11eb-8011-92e1ccfcf1c7.png)


##Future Features

Implement aws properly so users can upload their favorite picutres of the trail. Also give the users the ability to views picutres of other users on the specified trail show page and show their own pictures


