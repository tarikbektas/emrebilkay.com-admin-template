const Fotograf = require('../model/fotografgaleri')
 
exports.fotografgoster = (req,res) =>{

Fotograf.findAll({order:[['fotografgalerisi_sira','ASC']]})
.then((fotografgalerises) => {
    res.render('admin/pages/fotografgalerisi',{ layout: 'admin/layouts/layout',title:'fotoğraf galeri sayfası',fotografgalerises:fotografgalerises})

}).catch((err) => {
    console.log(err)
});
}





exports.veriekle = (req,res) =>{
    const sira = req.body.sira;
    const dosya = req.body.image-1;
    
    Fotograf.create({
        fotografgalerisi_sira : sira,
        fotografgalerisi_url : dosya
    })
    .then(()=>{
        res.redirect('/admin/fotografgalerisi')
    })
    }
    



    exports.verisil = (req,res) =>{
        const sira = req.body.fotografid;
        
        Fotograf.destroy({
           where :{id:sira}
        })
        .then(()=>{
            res.redirect('/admin/fotografgalerisi')
        })
        }