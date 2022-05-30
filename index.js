import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url'
import * as prismicH from '@prismicio/helpers'
import { client } from './config/prismicConfig.js'

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'views')))


/**
 * Add middleware function that runs on every route. will inject prismic context to the locals so it is accessible in the templates
 */
app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  }
  next()
})



app.get('/:standaard', async (req, res, next) => {
  const document = await client.getByUID('standaard', req.params.standaard)
  res.render('page', {document})
  next()
})

app.get('/', async (req, res) => {
  // const document = await client.getFirst()
  // const document = await client.getByUID('standaard', 'standaard-1')

  // console.log(document)
  res.render('index', {nav: ['standaard-1','standaard-2','standaard-3','standaard-4']})
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})