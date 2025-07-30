import express from "express";
const app = express();
const port = 3002;

app.use(express.static('../dist'));

app.get('/', (req,res)=>{
  res.send('index.html');
})

app.listen(port,()=>{
  console.log(`Server up on port:${port}`)
});
