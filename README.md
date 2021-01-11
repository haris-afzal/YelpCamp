# YelpCamp
This is a massive project from Colt Steele's famous Web developer bootcamp. 

It is a **_Full-Stack, responsive web application_** to explore, create, modify and delete (CRUD) campgrounds around the **world** andleave reviews to exisitng campgrounds on the site that the users have visited . This application is designed to **mimic** some of the functionality of popular website YELP's features. 


# Live Demo Link
The application is deployed and can visited by clicking [HERE](https://aqueous-bayou-49410.herokuapp.com/) 

_(might take 5 to 10 seconds to load since it is hosted on a free platform)_


## IMPORTANT

The website **only allows registered users** to make modifications (in order to demonstrate the authorization features). Therefore, in order to leave reviews, add campgrounds of your own or edit existing campgrounds, please either **_Signup_** as a registered user **OR** use the following credentials to login a guest account:

* *Username:* **Tim**

* *Password:* **tim**

# Platform 
The application is being hosted on **Heroku's** free platform since this is not a commercial application.

# Front-end Tools and Frameworks
HTML, CSS and **_Bootstrap_** used to design the boilerplate interactivity of the user interfaces.

# Back-end Tools and Frameworks
The application is built on **_Node.Js_** for all its functionality including the CRUD.

It has been paired with various **_NPM_** packages and libraries for multiple functionalities.
* For all routing requests it utilizes **_ExpressJS_** and follows a **RESTful** pattern.
* Uses **_Express-session_** and **_connect-flash_** packages to store **_cookies_** and **_session ID_**.
* For user authentication, it uses **_passport_**, **_passport-local_** and **_passport-local-mongoose_** packages which are libraries designed to store secure **hashed** password data.
* Database used in the application is **_MongoDB_** and thus the package **_mongoose_** is paired with it to integrate it easily with express and Node.
* **_Multer_** package was used as part of website's basic security steps to protect it from cyber attacks.

## Database
The application uses the NoSQL database **_MongoDB_** therefore to deploy the website, the cloud services from **_MongoDB ATLAS_** have been used.

To store high quality images of the campgrounds uploaded by the users, the application uses another cloud storage service from **_Cloudinary_**. The sample images on the website are from unsplash.com

## APIs
The application uses the package **_Geocoder_** to geocode locations of the campgrounds and then utilizes the APIs from **_MAPBOX_** to display the location of the campgrounds around the world. MAPBOX's tools also provide a user friendly interface for users to navigate to their deisred locations for the campgrounds.


# Author
Haris Afzal

