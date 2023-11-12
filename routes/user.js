const express =require('express')
const router = express.Router();
const index= require('../controllers/index')
const Genelayarlar= require('../controllers/setting')
const login = require('../controllers/login')


router.get('/',index.indexgoster)




router.get('/login',login.sayfagoster)
router.post('/login',login.giris)
 

// router.get('/kayit',login.kayitgöster)
// router.post('/kayit',login.veriekle)
 




module.exports  = router;