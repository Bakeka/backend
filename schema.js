//schema
import mongoose from 'mongoose';
//connection with my db
mongoose.connect('mongodb+srv://admin:ingegneria@cluster0.njhju.mongodb.net/?retryWrites=true&w=majority');

var Schema = mongoose.Schema; 

var materialSchema = Schema({
    typeMaterial: String
});

var Material = mongoose.model('Material', materialSchema); 

var purposeSchema = Schema({
    purpose: String
});

var Purpose = mongoose.model('Purpose', purposeSchema); 

var accessibilitySchema = Schema({
    accessibility: String
});

var Accessibility = mongoose.model('Accessibility', accessibilitySchema); 

var affluenceSchema = Schema({
    affluence: String
});

var Affluence = mongoose.model('Affluence', affluenceSchema); 

var bakekaSchema = new Schema({   
    id: Number, 
    name: String, 
    //affluences: String,
    affluence: [{ type:String, ref: 'Affluence'}],
    //materials: String,
    material: [{ type:String, ref: 'Material'}],
    //purposes: String,
    purpose: [{ type:String, ref: 'Purpose'}],
    //accessibilty: String,
    accessibilty: [{ type:String, ref: 'Accessibility'}],
    url: String,
    position: {      latitude: Number,      longitude: Number    } 


});  
var Bakeka = mongoose.model('Bakeka', bakekaSchema); 


export {Bakeka, Affluence, Accessibility, Material, Purpose};

