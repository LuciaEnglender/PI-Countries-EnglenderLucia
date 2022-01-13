const express = require('express');
const  axios  = require('axios');
const {Activity, Country} = require('../db');
const sequelize = require('sequelize')


const countriesRoute = express();

countriesRoute.use(express.json());


const getApiInfo = async () => {
    const apiInfo = await axios.get('https://restcountries.com/v2/all');
    const info = await apiInfo.data.map(m => {
        return {
            id : m.cioc || m.alpha3Code,
            name : m.name,
            flag : m.flags.png,
            region : m.region,
            capital : m.capital || m.name,
            subregion : m.subregion,
            area : m.area,
            population : m.population,
        };
    })
    return info
}


countriesRoute.get('/' , async (req, res) => {
    const {name} = req.query;
    const countriesInDB = await Country.findAll({
        include: {model : Activity}
    });


    try {
    if(!countriesInDB.length){
            const apiData = await getApiInfo();
            await Country.bulkCreate(apiData);
            const countriesInDB2 = await Country.findAll({
                include: {model : Activity}
            });
        
        if(name){
            let findName = apiData.filter( m => m.name.toLowerCase().includes(name.toLowerCase()) )
            findName.length? res.status(200).json(findName) :
                res.status(404).send({message : `${name} no existe`});
        } else {
            res.status(200).json(countriesInDB2)
        }
    } else {
        if(name){
            let findName = countriesInDB.filter( m => m.name.toLowerCase().includes(name.toLowerCase()) )
            findName.length? res.status(200).json(findName) :
            res.status(404).json({message : `${name} no existe`});

        } else {
            res.status(200).json(countriesInDB)
        }
    }
    }catch(e){
        res.status(400).send('NOT FOUND: '+ e)
    }
});

countriesRoute.get('/:idPais', async (req, res) => {
    const {idPais} = req.params;

    try {
        //const apiInfo = await axios.get(`https://restcountries.com/v3/alpha/${idPais}`);
        const getDBInfo = await Country.findAll({
            where : {
                id : idPais.toUpperCase()
            },
            include: {
                model: Activity,   
                attributes : ['description', 'dificulty', 'season', 'duration'],
                through : {
                    attributes : []
                }
            }
        })
       

        res.status(200).json(getDBInfo)

    } catch (error) {
     res.status(404).json({message : `${idPais} no existe`});
    }
})


module.exports = countriesRoute;