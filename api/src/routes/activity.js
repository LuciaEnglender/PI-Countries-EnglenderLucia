const express = require('express');
const  axios  = require('axios');
const {Activity, Country} = require('../db');

const activitiesRoute = express();

activitiesRoute.use(express.json());

activitiesRoute.get('/', async (req, res) => {
    let getAllActivities = await Activity.findAll({
        include: {model: Country}
    });

    return res.status(200).json(getAllActivities)
})

activitiesRoute.post('/',async (req, res) => {
    const {
         description,
         duration, 
         dificulty, 
         season, 
         nameCountry
        } = req.body;

    try {
        let activityCreated = await Activity.create({
            description,
            dificulty,
            duration,
            season
        }) 

       let countryDB = await Country.findAll({
            where :{
                name : nameCountry
            }
        })

        activityCreated.addCountry(countryDB)

         return res.status(200).send('creado con exito')
        } catch (error) {
            console.log(error)
            return res.status(400).send(error)
        }
  
})

module.exports = activitiesRoute