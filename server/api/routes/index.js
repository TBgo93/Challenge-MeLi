import express from 'express'
import getItemById from './../services/getItemById.js';
import searchByQuery from './../services/searchByQuery.js';

const router = express.Router()

router.get('/items/:id', async (req, res) => {
  const id = req.params.id
  const response = await getItemById(id)
  res.json(response)
})

router.get('/items', async (req, res) => {
  const { q } = req.query
  const response = await searchByQuery(q)
  res.json(response)
})

router.get('/*', (_req, res) => {
  res.sendStatus(404)
})

export default router