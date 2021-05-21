# TrailMix

#### [Live Site](https://trail-mix-app.herokuapp.com/#/)


## About

TrailMix is an Alltrails.com clone, users are able to search for their favorite trails or national parks.  The user can access the parks show page to find a brief summary of the hike as well as some of the trails in the park.  The user is also able to access the trail show page for each individual trail.  On the trail show page the user will have access to detailed information about the trails, such as, legnth of the trail, elevation gain, route type and a map of the trail.  A user can read reviews of other hikers who've done the trail, as well as write their own review or delete it.

TrailMix backend is built using Ruby on Rails framework and PostgreSql database.  The frontend of the site is built with React, using Redux to manage the frontend state.  Jquery $.ajax() function is used for all the AJAX.


## Features 

## Reasuable search for parks

On TrailMix the user will be able to travel to the parks show page.  There much info will be displayed about the park.  The user will also be given some information about the trails within the park and on a click will be able to travel to that trails show page.  I passed in a <park_id> to each trail and was able to extract the trails that had the same
<park_id> as the <id> of the park.


