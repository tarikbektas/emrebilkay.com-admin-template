const e = require('express');
const User = require('../model/user');
 

exports.sayfagoster = (req,res) =>{
    res.render('admin/pages/login',{layout: false , title:'Haberler Sayfası'})

}
 
 
 



exports.giris = (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    let girisbilgisi =true


   const user =  User.findOne({where:{email:email}})
   if(user) {
    const errorMessage = req.query.error;

    User.findOne({where:{email:email}})
    .then(user=>{
        if( user.password === password){
            console.log('bilgiler doğru')
            res.redirect('/admin')
            global.globalGirisBilgisi = true

        }
        else{
            console.log('Şifre Yanlış')
            global.globalGirisBilgisi = true
            const bilgi = 'giriş bilgileri yanlış'
            const errorMessage = 'Giriş bilgileri yanlış';
            res.render('admin/pages/login',{layout: false , title:'Haberler Sayfası',errorMessage})
            
          
            
        }
       
    })
   }else{
    console.log('Kullanıcı tanımlı değil')
    global.globalGirisBilgisi = true
    res.redirect('/login')
    
   }
  
}












exports.veriekle = (req,res) =>{
    const email = req.body.email;
    const password = req.body.password



    User.create({
        email:email,
        password:password,
    })
    .then(()=>{
        
    })
 }


 exports.kayitgöster = (req,res) =>{
    res.render('admin/pages/kayıt',{layout: false , title:'Kayıt Sayfası'})

 }

