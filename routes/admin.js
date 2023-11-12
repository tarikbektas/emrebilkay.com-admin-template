const express = require('express');
const router = express.Router();
const notifier = require('node-notifier');

const Sosyalmedya = require('../model/sosyalmedya')
const girissayfasi = require('../controllers/girissayfasi')
const hakkimizda =require('../controllers/hakkimizda')
const sosyalmedya =require('../controllers/sosyalmedya')
const fotografgalerisi = require('../controllers/fotografgalerisi')
const videogaleri =require('../controllers/videogaleri')
const Fotograf = require('../model/fotografgaleri')
const haberler = require('../controllers/haberler')
const Haberler=require('../model/haberler')
const genelayarlar= require('../controllers/setting')
const html= require('../controllers/html') 
const login  = require('../controllers/login')


const multer = require('multer')
const path = require('path');
const Genelayarlar = require('../model/genelayarlar');
const { log } = require('console');
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
// admin sayfası index gösteren router

router.get('/',(req,res)=>{
    res.render('admin/components/index',{ layout: 'admin/layouts/layout',title:'Yönetim Paneli'})
})

// setting sayfasını 
router.get('/setting',genelayarlar.verigoster)
router.post('/setting',upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]),  (req, res) => {
  const id = 1;
  const title = req.body.site_title;
  const desc = req.body.site_description;
  const keywords = req.body.site_keywords;
  const phone = req.body.phone;
  const instagram = req.body.instagram_username;
  const facebook = req.body.facebook_username;
  const email = req.body.email;
  const bakim = req.body.is_live
  const url = req.body.site_url
  const twitter = req.body.twitter_username;
  const adres = req.body.address;
  const youtube = req.body.youtube_username;
  const iframe= req.body.iframe;
  const files1 = req.files['image1'];
  const files2 = req.files['image2'];
  const image1Path = files1 && files1[0] ? path.join( 'uploads/', files1[0].filename) : null;
  const image2Path = files2 && files2[0] ? path.join( 'uploads/', files2[0].filename) : null;
   
  Genelayarlar.findAll({where :{ id :id}})
   .then(genelayarlars=>{
    genelayarlars[0].site_title=title,
    genelayarlars[0].site_description=desc,
    genelayarlars[0].site_keywords=keywords,
    genelayarlars[0].instagram_username= instagram,
    genelayarlars[0].site_url=url,
    genelayarlars[0].bakim_modu =bakim,
    genelayarlars[0].facebook_username=facebook,
    genelayarlars[0].phone=phone,
    genelayarlars[0].twitter_username=twitter,
    genelayarlars[0].email=email,
    genelayarlars[0].youtube_username=youtube,
    genelayarlars[0].address=adres,
    genelayarlars[0].logo=image1Path,
    genelayarlars[0].favicon=image2Path,
    genelayarlars[0].iframe_id=iframe
    genelayarlars[0].save().then(result =>{
      res.redirect('/admin/setting')
      notifier.notify({
        title: 'Uyarı',
        message: 'İstediğiniz değişiklikler yapıldı',
        sound:false 
      });
      
    
    })
   }

   )

})

// giriş sayfası
router.get('/girissayfasi',girissayfasi.girissayfasiget)
router.post('/girissayfasi',girissayfasi.girissayfasiupdate)


// sosyal medya sayfası 
router.get('/sosyalmedya',sosyalmedya.sosyalmedyaget)
router.post('/sosyalmedya', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]),  (req, res) => {
    const files1 = req.files['image1'];
    const files2 = req.files['image2'];
    const sira = req.body.sira;
    const link = req.body.link;
    const image1Path = files1 && files1[0] ? path.join( 'uploads/', files1[0].filename) : null;
    const image2Path = files2 && files2[0] ? path.join( 'uploads/', files2[0].filename) : null;
     
    Sosyalmedya.create({
        socialmedia_sira:sira,
        link :link,
        socialmedia_logo:image1Path,
        socialmedia_img:image2Path
    })
    .then(()=>{
        console.log('işlem başarılı')
        res.redirect('/admin/sosyalmedya')
        notifier.notify({
          title: 'Uyarı',
          message: 'İstediğiniz değişiklikler yapıldı',
          sound:false 
        });
    })
    .catch(err=>{console.log(err)})
   
  });
router.post('/sosyalmedyasil',sosyalmedya.verisil)

 
// hakkımızda sayfası
router.get('/hakkimizda',hakkimizda.hakkimizdaverigoster)
router.post('/hakkimizdaedit',hakkimizda.hakkimizdaupdate)



// video galeri sayfası
router.get('/videogaleri',videogaleri.getvideogaleri)
router.post('/videogaleri',videogaleri.veriekle)
router.post('/videgalerisil',videogaleri.verisil)

router.get('/htmlicerik',html.verigoster)
router.post('/htmlicerik',html.veriekle)

 
// fotoğraf galerisi sayfası
router.get('/fotografgalerisi',fotografgalerisi.fotografgoster)
router.post('/fotografgalerisi', upload.fields([{ name: 'image1', maxCount: 1 }]),  (req, res) => {
  const files1 = req.files['image1'];
  const sira = req.body.sira
  const image1Path = files1 && files1[0] ? path.join( 'uploads/', files1[0].filename) : null;
    
   Fotograf.create({
    fotografgalerisi_sira:sira,
      fotografgalerisi_url:image1Path,
  })
  .then(()=>{
      console.log('işlem başarılı')
      res.redirect('/admin/fotografgalerisi')
  })
  .catch(err=>{console.log(err)})
 
})
router.post('/veriekle',fotografgalerisi.veriekle)
router.post('/fotografverisil',fotografgalerisi.verisil)






 



router.get('/haberler',haberler.verigoster)
router.post('/haberler',upload.fields([{ name: 'image1', maxCount: 1 }]),  (req, res) => {
  const files1 = req.files['image1'];
  const sira = req.body.sira;
  const title=req.body.title
  const desc = req.body.desc;
  const image1Path = files1 && files1[0] ? path.join( 'uploads/', files1[0].filename) : null;
    
   Haberler.create({
    title:title,
    desc:desc,
    sira:sira,
    img:image1Path    
   })
  .then(()=>{
      console.log('işlem başarılı')
      res.redirect('/admin/haberler')
  })
  .catch(err=>{console.log(err)})
 
})
router.post('/habersil',haberler.verisil)





 



router.use((req,res)=>{
    res.render('404')
})


 


 
module.exports  = router;