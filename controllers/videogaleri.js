const Videogaleri = require('../model/videogaleri')


exports.getvideogaleri = (req,res)=>{
    Videogaleri.findAll({order:[['videogaleri_sira','ASC']]})
    .then(videogalerisi=>{
        res.render('admin/pages/videogaleri',{layout:'admin/layouts/layout',title:'Video Galeri',videogalerisi:videogalerisi})
    })
   
}




exports.veriekle = (req,res,next) =>{
    const baslik  = req.body.videobaslik;
    const url = req.body.videourl;
    const sira = req.body.sira;

    Videogaleri.create({
        videogaleri_sira : sira,
        videogaleri_title :baslik,
        socialmedia_url :url
    })
    .then((result)=>{
        res.redirect('/admin/videogaleri')
    }).catch(err=>{console.log(err)})
}



exports.verisil = (req,res) =>{
    const id = req.body.videoid
    Videogaleri.destroy({
      where: {id: id }
    })
    .then(()=>{
      res.redirect('/admin/videogaleri')
    })
  }
   
  