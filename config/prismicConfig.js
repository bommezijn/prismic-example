import fetch from 'node-fetch'
import * as prismic from '@prismicio/client'

const REPO_NAME = 'cmd-midterm'
const ACCESS_TOKEN = ''

const routes = [
  {
    type: 'post',
    path: '/:uid'
  }
]

export const client = prismic.createClient(REPO_NAME, {
  fetch, ACCESS_TOKEN, routes
})