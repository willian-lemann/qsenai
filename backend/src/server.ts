import express from 'express';
import { Server } from 'http';
import cors from 'cors';
import routes from './routes';
const port = process.env.PORT || 3333;

import { webSocketConfig } from './websocket';

const app = express();
const server = new Server(app);

webSocketConfig(server);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);