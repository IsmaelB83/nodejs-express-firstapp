"use strict";

var mongoose = require('mongoose');

var athleteSchema = mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    country: String,
    gamesWon: Number,
    imageUrl: String,
    bio: String,
    instagram: String
});

mongoose.model('Athletes', athleteSchema);