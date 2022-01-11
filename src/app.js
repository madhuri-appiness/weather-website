const path = require('path');
const express = require('express');
const geoCode = require('../utils/geocode');
const getForecast = require('../utils/forecast')
const app = express();

//define paths for express config
const publicDir = path.join(__dirname,'../public');
const tempDir =path.join(__dirname,'../templates');

const port = process.env.PORT || 5000; 

//set up view engine in handlebars where views is default
app.set('view engine','hbs');

//set up custom views in hbs where views is renamed
app.set('views',tempDir)

// setup static directory to serve
app.use(express.static(publicDir))


//get handlebar index template 
app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'madhuri Patil'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
       return res.send('You Must send address')
    }
    else{
        geoCode(req.query.address, (err, {lat,long,location}={}) => {
            if (err) {
                return res.send({err})
            } else {
                getForecast(lat, long, (error, result) => {
                    if (error) {
                        return res.send({error})
                    } else {
                       return res.send({
                           forecast:result,
                           address:req.query.address,
                           location:location
                        })
    
                    }
                })
            }
    
    
        })
    //  return res.send({
    //         forecast:'Hello weather',
    //         location:req.query.address
    //     })
    }
})

app.listen(port,()=>{
    console.log('server is on port 5000')
})