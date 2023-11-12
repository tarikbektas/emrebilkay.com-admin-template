const Sosyalmedya = require('../model/sosyalmedya');
const multer = require('multer')
const path = require('path');
const upload = multer({ 
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      const filename = file.originalname.replace(extname, '').toLowerCase().split(' ').join('-') + '-' + Date.now() + extname;
      cb(null, filename);
    }
  })
});

exports.sosyalmedyaget = (req,res) =>{
    Sosyalmedya.findAll({ order: [['socialmedia_sira', 'ASC']]})
    .then(socialmedia=>{
      
        res.render('admin/pages/sosyalmedya',{layout:'admin/layouts/layout',title:'Sosyal Medya',socialmedia:socialmedia})
    })


    
}

exports.verisil = (req,res) =>{
  const id = req.body.sosyalmedyaid
  Sosyalmedya.destroy({
    where: {id: id }
  })
  .then(()=>{
    res.redirect('/admin/sosyalmedya')
  })
}
 

 