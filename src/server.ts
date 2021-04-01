import "reflect-metadata";
import express from 'express';
import {ClientesController} from './controllers/ClientesController';
import {FerramentasController} from './controllers/FerramentasController';

import './database';
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const clientesController = new ClientesController();
const ferramentasController = new FerramentasController();


// CLIENTES
app.post("/criar_cliente", clientesController.create);
app.get("/listar_clientes", clientesController.show);
app.patch("/atualizar_cliente/:id", clientesController.update);
app.delete("/deletar_cliente/:id", clientesController.delete);

// FERRAMENTAS
app.post("/criar_ferramenta", ferramentasController.create);
app.get("/listar_ferramentas", ferramentasController.show);
app.patch("/atualizar_ferramenta/:id", ferramentasController.update);
app.delete("/deletar_ferramenta/:id", ferramentasController.delete);

app.listen(3333, () => console.log('server started'));