import express from 'express';
import Connection from './db/db.js'
import Route from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',Route);
Connection();
const PORT = 8000;

app.listen(PORT,()=>console.log(`server is running successfully on port ${PORT}`));
