const Html = require('../model/html')





exports.verigoster = (req,res) =>{
    Html.findAll()
    .then(htmls=>{
        res.render('admin/pages/pages/html',{ layout: 'admin/layouts/layout',title:'Haberler Sayfası',htmls:htmls})
        console.log('html içerik',htmls)
    })

}


exports.veriekle = (req,res) =>{

    const html = req.body.editor1

    Html.create({
        html_icerik:html
    })
    .then(result =>{
         res.redirect('/admin/htmlicerik')
    })
}