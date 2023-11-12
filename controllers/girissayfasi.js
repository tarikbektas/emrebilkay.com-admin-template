const Girissayfasi = require('../model/girissayfasi');


//  exports.getgirissayfasi = (req,res) =>{
//     Girissayfasi.findAll()
//     .then((girissayfassi) => {
        
//         console.log(girissayfasi)
//         res.render('admin/pages/girissayfasi',{layout:'admin/layouts/layout',title:'giriş Sayfası'})
         
        
//     }).catch((err) => {
//         console.log("HATA",err)
//     });

//  } 
 

exports.girissayfasiget = (req,res)=>{

    Girissayfasi.findAll()
    .then(girissayfasis=>{
        res.render('admin/pages/girissayfasi',{ layout: 'admin/layouts/layout',title:'giris sayfası',girissayfasis:girissayfasis[0]})
    })
 
}

 exports.girissayfasiupdate = (req, res) => {
    const id = 1;
    const yaziust = req.body.hakkimizdatop;
    const altyazi = req.body.hakkimizdabot;
    const spotify = req.body.spotify

    .findAll({ where: { id: id } })
        .then(hakkimizdas => {
            hakkimizdas[0].page2_hakkimizdatop = yaziust;
            hakkimizdas[0].page2_hakkimizdabot = altyazi;
            hakkimizdas[0].page2_spotify_link = spotify;
            hakkimizdas[0].save().then(result => {
                console.log(result)
                res.redirect('/admin')
            }).catch(err => { console.log(err) });
        })
        .catch(err => { console.log(err) });
}


    exports.girissayfasiupdate = (req,res)=>{
        const id = 1;
        const title  = req.body.ustyazi;
        const slogan = req.body.altyazi;
        const button = req.body.buttonyazi;

        Girissayfasi.findAll({where:{id:id}})
        .then(girissayfasis=>{
           girissayfasis[0].page1_title = title ,
           girissayfasis[0].page1_slogan = slogan,
           girissayfasis[0]. page1_buton_text = button
           girissayfasis[0].save().then(result=>{res.redirect('/admin/girissayfasi')})

        })
    }












exports.girissayfasiveriekle = (req,res,next) =>{
    const title  = req.body.ustyazi;
    const slogan = req.body.altyazi;
    const button = req.body.buttonyazi;

    Girissayfasi.create({
        page1_title : title,
        page1_slogan :slogan,
        page1_buton_text :button
    })
    .then((result)=>{
        res.redirect('/admin/girissayfasi')
    }).catch(err=>{console.log(err)})
}


//  exports.editgirissayfasi =(req,res,next) =>{
//     const baslik = "test";
//     const description = req.body.description;
//     const url = req.body.url;
//     const img = req.body.img;
//     const id = req.body.id;
//     Slider.findByPk(id)
//     .then(slider=>{
//        slider.baslik = baslik;
//        slider.description =description;
//        slider.url = url;
//        slider.img = img,
//        slider.save().then(res.redirect('/add-slider')).catch(err=>{console.log(err)})
   
//     })
//     .catch(err=>{console.log(err)})
//    }