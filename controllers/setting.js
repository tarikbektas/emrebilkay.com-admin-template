const Genelayarlar = require('../model/genelayarlar')
const path = require('path')
const express=require('express')
const app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/admin')));
const bodyParser = require('body-parser')
app.set('views','./views')

const multer = require('multer')
const upload = multer({ 
  storage: multer.diskStorage({
    destination: 'public/admin/uploads/',
    filename: (req, file, cb) => {
      const extname = path.extname(file.originalname);
      const filename = file.originalname.replace(extname, '').toLowerCase().split(' ').join('-') + '-' + Date.now() + extname;
      cb(null, filename);
    }
  })
});

exports.verigoster = (req,res) =>{
    Genelayarlar.findAll()
    .then(genelayarlars=>{
        res.render('admin/pages/setting',{ layout: 'admin/layouts/layout',title:'Site Ayarları',genelayarlars:genelayarlars[0]})
    })
   
}


exports.veriekle =upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]),  (req, res) => {
    const title = req.body.site_title;
    const desc = req.body.site_description;
    const keywords = req.body.site_keywords;
    const phone = req.body.phone;
    const instagram = req.body.instagram_username;
    const facebook = req.body.facebook_username;
    const email = req.body.email;
    const bakim = req.body.is_live
    const twitter = req.body.twitter_username;
    const adres = req.body.address;
    const youtube = req.body.youtube_username;
    const iframe= req.body.iframe;
    const files1 = req.files['image1'];
    const files2 = req.files['image2'];
    const image1Path = files1 && files1[0] ? path.join( 'uploads/', files1[0].filename) : null;
    const image2Path = files2 && files2[0] ? path.join( 'uploads/', files2[0].filename) : null;
     
    Genelayarlar.create({
        site_title:title,
        site_description:desc,
        site_keywords:keywords,
        instagram_username: instagram,
        site_url:'www.emrebilkay.com',
        bakim_modu :bakim,
        facebook_username:facebook,
        phone:phone,
        twitter_username:twitter,
        email:email,
        youtube_username:youtube,
        address:adres,
        logo:image1Path,
        favicon:image2Path,
        iframe_id:iframe
    })
    .then(()=>{
        console.log('işlem başarılı')
        res.redirect('/admin/setting')
    })
    .catch(err=>{console.log(err)})
   
  }

 