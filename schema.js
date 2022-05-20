//schema
import mongoose from 'mongoose';
const { Schema } = mongoose;


const blogSchema = new Schema({
    name: String,
    id: Integer,
    position: [{ posx: Double, posy: Double}],
    purpose: String,
    url: String,
    material: String,
    accessibilty: String,
    affluence: String 
    
});

bookSchema.path('_id'); // ObjectId { ... }

const BookModel = mongoose.model('Book', bookSchema);



















const bookSchema = new Schema({
title: String, // String is shorthand for {type: String}
author: String,
body: String,
comments: [{ body: String, date: Date }],
date: { type: Date, default: Date.now },
hidden: Boolean,
meta: {
votes: Number,
favs: Number
}
});





const Cat = mongoose.model('Cat', { name: String }); //interface with a specific collection 
const kitty = new Cat({ name: 'Zildjian' }); //document 
kitty.save().then(() => console.log('meow'));
