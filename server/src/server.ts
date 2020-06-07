import express from 'express'
import cors from 'cors'
import routes from './routes'
import pach from 'path'
import { errors } from 'celebrate'

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes)

app.use('/uploads', express.static(pach.resolve(__dirname, '..', 'uploads')))
app.use(errors())
app.listen(3333);
