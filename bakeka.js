import {Bakeka, Purpose, Material, Affluence, Accessibility} from './schema.js';
//var Bakeka = require('./schema'); 
Bakeka.remove({}, function(err) {     
             if (err) {                  console.log(err)              }  
            else {console.log('cancellazione eseguita')}          }      ); 

Purpose.remove({}, function(err) {     
    if (err) {                  console.log(err)              }  
else {console.log('cancellazione eseguita')}          }      ); 

Accessibility.remove({}, function(err) {     
             if (err) {                  console.log(err)              }  
            else {console.log('cancellazione eseguita')}          }      );

Material.remove({}, function(err) {     
if (err) {                  console.log(err)              }  
else {console.log('cancellazione eseguita')}          }      ); 

Affluence.remove({}, function(err) {     
if (err) {                  console.log(err)              }  
else {console.log('cancellazione eseguita')}          }      ); 

/*var note1 = new Bakeka({  
    id:1,
    name: 'Gita a Venaria',  
    affluence: 'Ci siamo tanto divertiti bla bla bla....', 
    materials: "skdgbf",
    purposes:"skjfb",
    accessibility: "aaaaaaaaa",
    url: 'Venaria',
    position: {latitude: 45.137058, longitude: 7.621327},
             }); */

var material1 = new Material({
    typeMaterial: "Legno"
});

var material2 = new Material({
    typeMaterial: "Metallo"
});

var material3 = new Material({
    typeMaterial: "Composito"
});

var material4 = new Material({
    typeMaterial: "Altro"
});

material1.save(function(err) {    if (err) throw err;  
    console.log('Salvataggio completato');  });  

material2.save(function(err) {    if (err) throw err;  
    console.log('Salvataggio completato');  });  

material3.save(function(err) {    if (err) throw err;  
    console.log('Salvataggio completato');  });  

material4.save(function(err) {    if (err) throw err;  
    console.log('Salvataggio completato');  });  


var purpose1 = new Purpose({ purpose: "Campagna Elettorale"});

var purpose2 = new Purpose({ purpose: "Necrologio"});

var purpose3 = new Purpose({ purpose: "Bacheca Avvisi"});

var purpose4 = new Purpose({ purpose: "Bacheca Eventi"});

var purpose5 = new Purpose({ purpose: "Bacheca Film"});

purpose1.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  });  

purpose2.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  }); 

purpose3.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  });  

purpose4.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  }); 

purpose5.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  });  

var access1 = new Accessibility({ accessibility: "Pubblica"});

var access2 = new Accessibility({ accessibility: "Privata"});

var access3 = new Accessibility({ accessibility: "Nascosta"});

access1.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  });  

access2.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  }); 

access3.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  });  


var aff1 = new Affluence({ affluence: "Alto"});

var aff2 = new Affluence({ affluence: "Medio"});

var aff3 = new Affluence({ affluence: "Basso"});

aff1.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  });  

aff2.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  }); 

aff3.save(function(err) {    if (err) throw err;  
console.log('Salvataggio completato');  });  




        
