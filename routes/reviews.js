const express = require('express');
const router = express.Router({mergeParams: true});
const { reviewSchema } = require('../schemas.js');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware.js');
const catchAsync = require('../utilities/catchAsync');
const reviews = require('../controllers/reviews');
const Campground = require('../models/campground');
const Review = require('../models/review');

const ExpressError = require('../utilities/expressError');


router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;