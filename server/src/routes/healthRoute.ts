import { Router } from 'express'
import { pool } from '../db/pool.js'

export const healthRoute = Router()

healthRoute.get('/', async (_req, res) => {
  try {
    await pool.query('SELECT 1')
    res.json({ status: 'ok', db: 'connected' })
  } catch (error) {
    console.error('DB 연결 실패:', error)
    res.status(503).json({ status: 'error', db: 'disconnected' })
  }
})
