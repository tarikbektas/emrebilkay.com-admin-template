const Haberler = require('../model/haberler')


exports.verigoster = (req,res) =>{
Haberler.findAll({order:[['sira','ASC']]})
.then(haberlers=>{
    res.render('admin/pages/haberler',{ layout: 'admin/layouts/layout',title:'Haberler Sayfası',haberlers:haberlers })
})
    
}



exports.verisil = (req,res) =>{
    const id = req.body.haberid
    Haberler.destroy({
        where:{id:id}
    })
    .then(()=>{
        console.log('silme başarılı')
        res.redirect('/admin/haberler')
    })
    .catch(err=>{
        console.log('haber silme işlemi başarısız:',err)
    })



}