const Fotografgaleri = require('../model/fotografgaleri');
const Genelayarlar = require('../model/genelayarlar');
const Girissayfasi = require('../model/girissayfasi');
const Haberler = require('../model/haberler');
const Hakkimizda = require('../model/hakkimizda')
const Sosyalmedya = require('../model/sosyalmedya');
const Videogaleri = require('../model/videogaleri');

 
exports.indexgoster = (req,res) =>{
Videogaleri.findAll({order:[['videogaleri_sira','ASC']]})
.then(videogaleris=>{
    Sosyalmedya.findAll({order:[['socialmedia_sira','ASC']]})
    .then(socialmedia=>{
        Hakkimizda.findAll()
        .then(hakkimizdas=>{
            Haberler.findAll({order:[['sira','ASC']]})
        .then(haberlers=>{
            Girissayfasi.findAll()
        .then(girissayfasis=>{
            Fotografgaleri.findAll({order:[['fotografgalerisi_sira','ASC']]})
            .then(fotografgalerises=>{ Genelayarlar.findAll()
                .then((genelayarlars) => {
                    const deger = genelayarlars[0].bakim_modu
                   if (deger == 1 ) {
                    res.render('../views/user/index.ejs',{ layout: false ,genelayarlars:genelayarlars[0],fotografgalerises:fotografgalerises,girissayfasis:girissayfasis[0],haberlers:haberlers,hakkimizdas:hakkimizdas[0],socialmedia:socialmedia,videogaleris:videogaleris})
                     
                   }
                   if (deger == 0 ) {
                    res.render('../views/maintenance-page.ejs',{ layout: false })
                   }
            
                   
                }).catch((err) => {
                    console.log(err)
                });})
        
        })
        })  
        })
    })
})
}



