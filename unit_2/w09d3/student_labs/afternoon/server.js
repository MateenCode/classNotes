// DEPENDENCIES
const express = require('express');
const app = express();

// run `npm i` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// jsx has not been installed - install it!
// views folder has not been created - create it!
// views/missions folder has not been created create it!

// PORT
const port = 3000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server
const marsMissions = [
  {
    name: "Curiosity",
    launchDate: "26 Nov 2011",
    operator: "NASA",
    missionType: "Rover",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia19808-main_tight_crop-monday.jpg"
  },
  {
    name: "Opportunity",
    launchDate: "8 Jul 2003",
    operator: "NASA",
    missionType: "Rover",
    img: "https://www.jpl.nasa.gov/images/mer/20091207/mer20091207-browse.jpg"
  },
  {
    name: "Spirit",
    launchDate: "10 Jun 2003",
    operator: "NASA",
    missionType: "Rover",
    img: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/images/287330main_image_1215_full.jpg"
  },
  {
    name: "Sojourner",
    launchDate: "4 Dec 1996",
    operator: "NASA",
    missionType: "Rover",
    img: "https://img.purch.com/w/640/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAwOS84NjAvaTAyL21hcnMtcGF0aGZpbmRlci1zb2pvdXJuZXIuanBnPzEzMDYzNTk5Nzg="
  },
  {
    name: "Rosetta",
    launchDate: "2 Mar 2004",
    operator: "ESA",
    missionType: "Gravity Assist",
    img: "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA18891_hires.jpg"
  }
];

// INDEX Route
// send data to 'missions/index.jsx' view
// the view should display just the names of each mission
// Stretch: the names should provide a link to the show page

// SHOW Route
// send data to 'missions/show.jsx' view
// the view should display all the data for a single mission
// the view should have a link back to the index
// Stretch: display the image inside an image tag



// LISTENER
app.listen(port, () => {
  console.log('Missions to Mars running on port: ', port);
})
