import express from 'express'
import React from '../client/node_modules/react'
import ReactDOMServer from '../client/node_modules/react-dom/server'
import { StaticRouter } from "../client/node_modules/react-router-dom/server"
import fs from 'fs'
import path from 'path'
import { config } from 'dotenv'
import api from './api/routes/index.js'
import cors from 'cors'
import App from '../client/src/components/App'

config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use('/api', api)

app.use(express.static(path.resolve(__dirname, "..", "client/build")))
app.use('/static', express.static(path.resolve(__dirname, "..", "client/build/static")))

app.get('*', (req, res) => {
  let url = req.url;
  const context = {}
  fs.readFile(path.resolve("../client/build/index.html"), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send('Some error happened')
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<StaticRouter location={url} context={context}><App /></StaticRouter>)}</div>`
      )
    )
  }
  )
})


app.listen(port, () => {
  console.log(`Serve on port ${port}`)
})