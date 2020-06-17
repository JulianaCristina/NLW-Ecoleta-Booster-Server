import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import {errors} from 'celebrate'

const app = express();
app.use(cors())
app.use(express.json())
//Request Param: Parâmetros que vem na própria rota que identificam um recurso
//Query Param: Parâmetros que vem na própria rota geralmente opcionais para fitros, paginação
//Request Body: Parâmetros para criação/atualização de informações
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors())

app.listen(3333);