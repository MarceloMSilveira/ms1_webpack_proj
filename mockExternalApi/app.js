import express from 'express';
import theData from './mockData.js';
import cors from 'cors';

const app = express();
const port = 3001;
app.use(cors());

app.get('/',(req,res) => {
  res.send(theData);
})

app.listen(port,()=>{
  console.log(`Mock API rodando em : ${port}`)
})
