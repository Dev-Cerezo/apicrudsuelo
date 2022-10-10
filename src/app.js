import express from 'express'
import config from './config'

import registrosSuelos from './routes/formSuelos.routes'

const app = express();

//settings
app.set('port', config.port)

//middlawares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(registrosSuelos)

export default app;