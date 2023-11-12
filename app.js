const express=require('express')
const app = express();
const routes = express.Router();
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const path = require('path')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' });
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/admin')));
const bodyParser = require('body-parser')
app.set('views','./views')
const notifier = require('node-notifier');


const login = require('./controllers/login')
const ejsLayouts = require('express-ejs-layouts')
const genelayarlar = require('./model/genelayarlar')
const girissayfasi = require('./model/girissayfasi')
const hakkimizda = require('./model/hakkimizda')
const sosyalmedya = require('./model/sosyalmedya')
const videogaleri = require('./model/videogaleri')
const fotografgaleri = require('./model/fotografgaleri')
const haberler =require('./model/haberler')
const html = require('./model/html')
const user = require('./model/user')

app.use(ejsLayouts)
app.set('layout', 'admin/layouts');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')
app.set('views',('views'))
app.use (bodyParser.urlencoded({extended:false}))

const sequelize = require('./utility/database')



 

//  sequelize.sync({force:true});
sequelize.sync()

function checkLoggedIn(req, res, next) {
    // Kullanıcı oturumu kontrolü burada yapılır
    // Örnek olarak, basit bir kontrol sağlıyoruz
    const isLoggedIn = global.globalGirisBilgisi; // Kullanıcı giriş yapmış mı?
    
    if (isLoggedIn) {
      // Kullanıcı giriş yapmışsa, sonraki middleware'e geç
      next();
    } else {
      // Kullanıcı giriş yapmamışsa, isteği reddet
      res.send('Giriş yapmadınız!');
    }
  }
  
  // Middleware'i uygula
  app.use('/admin', checkLoggedIn);
  
 

app.use('/admin',adminRoutes)
app.use ('/',userRoutes)

app.use((req,res)=>{
    res.render('404',{ layout: false })
})

app.listen(3000,()=>{
    console.log('proje çalışıyoru')
})