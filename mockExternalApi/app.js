import express from 'express';
import theData from './mockData.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3003;
app.use(cors());

app.get('/',(req,res) => {
  res.send(theData);
})

app.get('/otimista', (req,res)=>{
    res.sendFile(path.join(__dirname, './otimista.html'));
})

app.get('/pessimista', (req,res)=>{
    res.sendFile(path.join(__dirname, './pessimista.html'));
})

app.get('/neutro', (req,res)=>{
    res.sendFile(path.join(__dirname, './neutro.html'));
})

app.listen(port,()=>{
  console.log(`Mock API rodando em : ${port}`)
})
