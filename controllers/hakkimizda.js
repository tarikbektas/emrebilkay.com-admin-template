const Hakkimizda = require('../model/hakkimizda');

exports.hakkimizdaverigoster = (req,res) =>{
    Hakkimizda.findAll({where : {id:1}})
    .then(hakkimizdas=>{
        res.render('admin/pages/hakkimizda',{layout:'admin/layouts/layout',hakkimizdas:hakkimizdas,title:'hakkımızda'})

    }) 




}
exports.hakkimizdaupdate = (req, res) => {
    const id = 1;
    const yaziust = req.body.hakkimizdatop;
    const altyazi = req.body.hakkimizdabot;
    const spotify = req.body.spotify

    Hakkimizda.findAll({ where: { id: id } })
        .then(hakkimizdas => {
            hakkimizdas[0].page2_hakkimizdatop = yaziust;
            hakkimizdas[0].page2_hakkimizdabot = altyazi;
            hakkimizdas[0].page2_spotify_link = spotify;
            hakkimizdas[0].save().then(result => {
                console.log(result)
                res.redirect('/admin/hakkimizda')
                notifier.notify({
                    title: 'Uyarı',
                    message: 'İstediğiniz değişiklikler yapıldı',
                    sound:false 
                  });
            }).catch(err => { console.log(err) });
        })
        .catch(err => { console.log(err) });
}


 



exports.addhakkimizda = (req,res,next) =>{
    const üstyazi = req.body.hakkimizdatop;
    const altyazi = req.body.hakkimizdabot;
    const spotify = req.body.spotify;
   
    Hakkimizda.create({
        page2_hakkimizdatop:üstyazi,
        page2_hakkimizdabot:altyazi,   
        page2_spotify_link:spotify
      
    })
    .then((result=>{
        console.log(result);
        res.redirect('/admin/hakkimizda')
        notifier.notify({
            title: 'Uyarı',
            message: 'İstediğiniz değişiklikler yapıldı',
            sound:false 
          });
        
    }))
    .catch((err)=>{console.log})
     
}