# Pinnakl Assignment
Q1 - Simply run `npm install && npm start`
      Now Head on to the browser and paste this URL in the address bar
       ```http://localhost:4200/```
     Currently the data is served from in-memory-web-api using HTTP Requests. This can be replaced with Real Endpoints easily.

Q2 - File `/src/server/bikesServer.js` holds the code. To run this code
      ```cd src/server && nodemon bikesServer.js```
      Now Head on to the browser and paste this URL in the address bar.
      ```http://localhost:8080/?count=20```
      Query parameter count describes the number of most popular responses you want to find. You can change this count parameter.
  * Dataset Location = ```/src/server/bikes.json```
  * Console output describes the most popular combination and their occurrence count.
  * Browser output describes the array of most popular combinations. Each element in this array is the combination of one or more bikes.

Q3 -  File `/src/server/priceServer.js` holds the code. To run this code
       ```cd src/server && nodemon priceServer.js```
       Now Head on to the browser and paste this URL in the address bar.
       ```http://localhost:8080/?count=3```
       Query parameter count describes the number of top prices you want to find. You can change this count parameter.
       Max Heap is implemented in this problem.
  * Dataset Location = ```/src/server/priceTimeStampDataset.json```
  * Console output shows the top prices.
  * Browser output describes the the top prices and timestamp records array.

      
          
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
