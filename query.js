import {Bakeka, Purpose, Material, Affluence, Accessibility} from './schema.js';

var n;
/*
Purpose.countDocuments({}, function(err, result) {
    if (err) {
        console.log(err);
      } else {
        n = result;
      }
    });

// taking all the purpose
Purpose.find({}).exec(function(err, notes) {   
    if (err) throw err; 
    for(var i=0; i< n; i++){
       console.log(notes[i].purpose);
   };
 });


 Material.countDocuments({}, function(err, result) {
    if (err) {
        console.log(err);
      } else {
        n = result;
      }
    });

//taking all the materials
Material.find({}).exec(function(err, notes) {   
     if (err) throw err; 
     for(var i=0; i< n; i++){
        console.log(notes[i].typeMaterial);
    };
  });


Accessibility.countDocuments({}, function(err, result) {
    if (err) {
        console.log(err);
      } else {
        n = result;
      }
    });

//taking all the accessibility
Accessibility.find({}).exec(function(err, notes) {   
    if (err) throw err; 
    for(var i=0; i< n; i++){
       console.log(notes[i].accessibility);
   };
 });

 
 Affluence.countDocuments({}, function(err, result) {
    if (err) {
        console.log(err);
      } else {
        n = result;
      }
    });
    

//taking all the affluence
Affluence.find({}).exec(function(err, notes) {   
    if (err) throw err; 
    for(var i=0; i< n; i++){
       console.log(notes[i].affluence);
   };
 });

 

//putting new info inside the db
var abba = "sdfghj";

var note1 = new Bakeka({  
    id:1,
    name: abba,  
    affluence: 'Ci siamo tanto divertiti bla bla bla....', 
    material: "skdgbf",
    purpose:"skjfb",
    accessibility: "aaaaaaaaa",
    url: 'Venaria',
    position: {latitude: 45.137058, longitude: 7.621327},
             }); 
             
note1.save(function(err) {    if (err) throw err;  
    console.log('Salvataggio completato');  }); */

//all the bakeka that are inside the map visualized from the user 
var latm=15
var latM=50
var longm =16
var longM=90
Bakeka.countDocuments({"position.latitude": { $gte: latm }, "position.latitude": { $lte: latM }, "position.longitude": { $gte: longm }, "position.longitude": { $lte: longM }}, function(err, result) {
    if (err) {
        console.log(err);
      } else {
        n = result;
        console.log(n);
      }
    });

    

Bakeka.find({"position.latitude": { $gte: latm }, "position.latitude": { $lte: latM }, "position.longitude": { $gte: longm }, "position.longitude": { $lte: longM }}).exec(function(err, notes) {   
    if (err) throw err; 
    for(var i=0; i< n; i++){
       console.log(notes[i].position.latitude);
       console.log(notes[i].position.longitude);
   };
 });


