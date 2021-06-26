import express from 'express';
import variables from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import path from 'path';

import { router } from './routes';

variables.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const app = express();

// Configurações De rotas;
app.use(express.json()); // Uso de JSON no body das rotas
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // Favicon da API
app.use(cors()); // Configuração de CORS a API
app.use(morgan("dev")); // Logs de Execução de Rotas

app.use('/api', router); // Rotas da API com prefixo '/api'


export { app };