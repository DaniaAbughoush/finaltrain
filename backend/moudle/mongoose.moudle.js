const mongoose = require('mongoose');
const ArtSchema = new mongoose.Schema({
  title:
  { type: String, 
    unique:true,
    lowercase: true,
     trim: true },
  slug:
  { type: String, 
    unique:true,
    lowercase: true,
     trim: true },
  artist:String,
  thumbnail:String,
  description:String

  });
  const ArtModel=mongoose.model('Art', ArtSchema);
  module.exports=ArtModel;