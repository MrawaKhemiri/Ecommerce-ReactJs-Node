import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routehome from './routes/homeroute.js'
import routeinscription from './routes/clientroute.js'
import routeproduit from './routes/productroute.js'
import routepanier from './routes/panierroute.js'
import session from "express-session";
import upload from "express-fileupload"
import flash from "connect-flash";
import cors from "cors"

import cookieParser from "cookie-parser";
import  MongoStore from'connect-mongo';



const app = Express()

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', "ejs")
app.set('views', 'views')
app.use(flash())
app.use(Express.static("public"))

app.use(upload())
app.use(cors({origin:'http://localhost:3000',
  credentials: true,}))
app.use(bodyParser.json())

import path from 'path';

// Specify the directory for serving static files
app.use(Express.static(path.join(process.cwd(), 'upload')));
const port = 8001

app.listen(port, () => {
  console.log(`serveur demarre sur:${port} `)
})
app.use(cookieParser())
app.use(
  session({
    secret: 'mysecret',
  resave: true,
  saveUninitialized: true,
  
  })
);


const connectBD = async () => {
  const dbname = 'ECOMMERCE'
  const url = "mongodb+srv://chaimabensalah:chaima@cluster0.r1ogbx4.mongodb.net/?retryWrites=true&w=majority"
  const cnx = await mongoose.connect(url)
  console.log('dbname:' + dbname)

}

connectBD();
 

app.use(routehome)
app.use(routeinscription)
app.use(routeproduit)
app.use(routepanier)