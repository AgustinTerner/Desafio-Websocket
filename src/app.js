import 'dotenv/config.js';
import express from "express";
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";
import logger from "morgan";
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import router from "./router/index.js"

const server = express();

//Setting template engine

server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.set('views', __dirname + '/views');

//Setting middlewares

server.use('/public', express.static('public'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'))

//Setting router

server.use(router)
server.use(errorHandler)
server.use(notFoundHandler)

export default server;