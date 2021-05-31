'use strict';
const superagent = require('superagent');
const ArtModel=require('../moudle/api.moudle')

const getApidata=async(req,res)=>{
    const URL=`https://api.artic.edu/api/v1/artworks?limit=10`
    const urlApi=superagent.get(URL).then(data=>{
        const dataApi=data.body.data.map(art=>{
            return new ArtModel(art)
        })
        res.send(dataApi)
    }).catch(error=>{
        console.log(`=================================`);
        console.log('error occured');
        console.log(error);
        console.log(`=================================`);
    })
}
module.exports=getApidata;