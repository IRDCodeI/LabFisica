//*Exportaciones para API Rest
const express = require('express');
const app = express();
const routes = require("./routes/server.routes");
const cors = require('cors');
const {mongoose} = require('./database');

//?Configuraciones
app.set('puerto', process.env.PORT|| 3000);
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use('/api/lab', routes);

//TODO: Inicio de API-REST
app.listen(app.get('puerto'));