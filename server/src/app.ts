import express from 'express'
import { healthRoute } from './routes/healthRoute.js'

export const app = express()

app.use(express.json())

app.use('/api/health', healthRoute)
