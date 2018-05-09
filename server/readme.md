# Assignment #5 - REST APIs
Teri Chadbourne

## The premise of this app: 
I manage a series of tech retreats called Offline Camp for which I need to match up strangers and turn them into roommates while keeping everyone relatively comfortable. This app is a first step toward managing that process with a computer instead of with sticky notes. 

## To view the app running live via Digital Ocean: 
* Open one browser window to [http://159.65.38.165:8080/bunkmates](http://159.65.38.165:8080/bunkmates) to see the main UI.
* Open a second browser window to [http://159.65.38.165:8080/ajax/apitest.html](http://159.65.38.165:8080/ajax/apitest.html) to see a rudimentary app from which you can access the same data via front-end AJAX.

## To run this code locally: 
* Install dependencies by typing `npm install` from the project directory.
* Create a `.env` file in the project directory containing DB_USER and DB_PWD values. (This file has been included in .gitignore. ) 
* Update the URI in the app.js file to reference your own MongoDB account. 
* To run this in standard mode, type `npm start` from the project directory.
* To run in debugging mode, type `npm run start-dev` from the project directory. 