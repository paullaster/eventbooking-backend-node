import express from 'express';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';
import { ApiResponder } from './middlewares/ApiResponder.js';
import { router } from './router/routes.js';

const app = express();

app.use(express.json({limit: '512mb'}));
app.use(cors());
app.use(ApiResponder);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(router);

// SERVING STATIC FILES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/storage', express.static(path.join(path.dirname(__dirname), 'storage')));

app.listen(3000, () => {
    console.log(`Server running \n http://127.0.0.1:3000`);
});