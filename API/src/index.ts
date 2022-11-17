import express from "express";
import mongoose from "mongoose";



mongoose.connect('mongodb:http://localhost:27017')
.then(() => {
  const app = express();
  app.listen(3001, () => {
    console.log("Server listening on port 3001");
  });
})
.catch(() => console.log('Erro ao conectar ao mongodb'))


