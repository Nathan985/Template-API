import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';

import { router } from './routes';

const app = express();

// Configurações De rotas;
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use('/api', router); // Rotas da API com prefixo '/api'


export { app };