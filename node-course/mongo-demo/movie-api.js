const mongoos =require("mongoose");

mongoos.connect("mongodb://localhost/vidly.movie",{useUnifiedTopology:true,useNewUrlParser:true});

const Generschema = new mongoos.Schema({
name:String
})

const Movieschema= new mongoos.Schema({
title:String,
genre:Generschema,
numberInStock:Number,
dailyRentalRate: Number
});

const Movie= mongoos.model('movie',Movieschema)

async function addMovie(){

const movies=new Movie({
title:

})


}