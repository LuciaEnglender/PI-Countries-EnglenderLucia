const  express  = require('express');
const  axios  = require('axios')
const countriesRoute = require('./countries')
const activitiesRoute = require('./activity')
const {Country, Activity} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express();
router.use('/countries', countriesRoute)
router.use('/activity', activitiesRoute)



module.exports = router;
