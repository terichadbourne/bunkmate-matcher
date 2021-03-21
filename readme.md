# Bunkmate Matcher

This app was built as a final project for a graduate-level Web Application Development using Node.js course, taken at Harvard Extension School in the Spring of 2018.

## The premise of this app: 
I manage a series of tech retreats called Offline Camp for which I need to match up strangers and turn them into roommates while keeping everyone relatively comfortable. This app is a first step toward managing that process with a computer instead of with sticky notes. 

The back end of this Node.js app (found in the `server` directory) uses Express and Mongoose to create a data service that can be accessed via API. 

The front end (found in the `client` directory) uses Angular to access that API.

## To view the app running live via Digital Ocean: 
* Open a browser window to [http://159.65.38.165:8080](http://159.65.38.165:8080) to see the main Angular UI.

## To run this code locally: 
* Clone the repo from GitHub.
* Install dependencies by typing `npm install` from the project's `server` directory.
* Create a `.env` file in the project's `server` directory containing DB_USER and DB_PWD values. (This file has been included in .gitignore. ) 
* Update the URI in the `server/app.js` file to reference your own MongoDB account. 
* To run this in standard mode, type `npm start` from the project's `server` directory.
* To run in debugging mode, type `npm run start-dev` from the project's `server` directory. 
