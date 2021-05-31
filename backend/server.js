const express = require('express')
const app = express()

const cors = require('cors')

require('dotenv').config();
app.use(cors())
app.use(express.json())

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/art',
 {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true});

 const ArtApiController=require('./controller/api.controller')
 const CrudController=require('./controller/crud.controller')

const PORT=process.env.PORT||8585

app.get('/', function (req, res) {
   res.send('Hello World')
 })
// get the api data
app.get('/art',ArtApiController)

 
 app.listen(PORT,()=>console.log(`start at ${PORT}`));


 // end points crud
 app.post('/art/fav',CrudController. postArt)
 app.get('/art/fav',CrudController. getArt)
 app.delete('/art/fav/:slug',CrudController. deletArt)
 app.put('/art/fav/:slug',CrudController. updatArt)


//  app.put()
