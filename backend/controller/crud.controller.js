'use stricrt';
const ArtModel =require('../moudle/mongoose.moudle');
const postArt= async(req,res)=>{
    const{
        title,
        artist,
        description,
        thumbnail
    }=req.body;
    const slug = title.toLowerCase().split(' ').join('-');
ArtModel.find({slug:slug},function(error,dataPost){
      if(dataPost.length>0){
          console.log(`---------`)
          console.log(error)
          console.log(`---------`)
        res.send('data exist')
    }else{

        const newArtModel=new ArtModel({
            title:title,
            slug:slug,
            artist:artist,
            description:description,
            thumbnail:thumbnail
    
        });
        newArtModel.save();
        res.send('item added')
    }
})
};
//get read stored data
const getArt=async (req,res)=>{
    ArtModel.find({},function(error,getdata){
        res.send(getdata)
    }
    )  
};
//get delet specific data
const deletArt=async(req,res)=>{
    const slug=req.params.slug
    ArtModel.deleteMany({slug:slug},function(error,deldata){
        if(error){
            console.log('******** delete error ********')
            console.log(error)
            console.log('********')
            res.send(error)
        }else{
            ArtModel.find({},function(error,deldata){
               res.send(deldata) 
            })
        }

    })
}

const updatArt=async(req,res)=>{
    const{
        description
      }=req.body
    const slug=req.params.slug
    ArtModel.find({slug:slug},function(error,putdata){
        if(error){
            console.log('********')
            res.send(error)
            console.log('********')
        }else{
            putdata[0].description=description
            putdata[0].save();
            ArtModel.find({},(error,putdata)=>{
                res.send(putdata)
            })
        }
    })
    
}
module.exports={postArt,getArt,deletArt,updatArt}