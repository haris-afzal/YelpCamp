const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelpCamp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random()*30) + 12;
        const camp = new Campground({
            author: '5ff027d3615d6317600bf9bb',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [ 
                { 
                    "url" : "https://res.cloudinary.com/dcnzvcg53/image/upload/v1609676816/YelpCamp/semwnlghud0enyqtgyga.png", 
                    "filename" : "YelpCamp/semwnlghud0enyqtgyga" 
                },
                { 
                    "url" : "https://res.cloudinary.com/dcnzvcg53/image/upload/v1609676839/YelpCamp/c3zshxrvyrrag8mc86dd.jpg", 
                    "filename" : "YelpCamp/c3zshxrvyrrag8mc86dd" 
                } 
            ],
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis est, labore in exercitationem error quisquam earum sint maiores, dolor natus amet, dolorum inventore dolorem consectetur ipsa. Quia magni labore libero.',
            price: price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})