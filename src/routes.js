const express = require("express");

const routes = express.Router();
const Controller = require("./controllers/controller");

routes.post("/ususario", Controller.store);
routes.get("/ususario/ :email", Controller.index);

module.exports = routes;