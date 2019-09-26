const express = require("express");
const mongoose = require("mongoose"); 

const server = express();
server.use(express.json());

mongoose.connect("mongodb://localhost:27017/dp-dw2", {
  useNewUrlParser: true,
});

const rotas = require("./server");
server.use(rotas);
server.listen(3333);