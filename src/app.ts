import express from 'express';

import './loadingVariables';

import cors from 'cors';
import morgan from 'morgan';

import favicon from 'serve-favicon';
import path from 'path';

import { router } from './routes';

const app = express();

// Configurações De rotas;
app.use(express.json()); // Uso de JSON no body das rotas
app.use(favicon(path.join(__dirname, '../', 'public', 'favicon.ico'))); // Favicon da API
app.use(cors()); // Configuração de CORS a API
app.use(morgan("dev")); // Logs de Execução de Rotas

app.use('/api', router); // Rotas da API com prefixo '/api'

router.use((req, res, next) => {
  const erro = new Error('Not Found')
  next(erro)
});

app.use((error, req, res, next) => {
  res.status(error.status || 401)

  return res.send({
      error: {
          success: 0,
          mensagem: error.message
      }
  })
})


export { app };