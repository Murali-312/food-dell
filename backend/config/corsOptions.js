const allowedOrigins = ['https://food-dell-1-8f6e.onrender.com','https://food-dell-3-n8gk.onrender.com']

const corsOptions ={
    origin: (origin,callback)=>{
        if(allowedOrigins.indexOf(origin)!== -1 || !origin){
            callback(null,true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
   },
    credentials:true,  //access-control-allow-credentials:true
    optionSuccessStatus:200
}
module.exports = corsOptions;
