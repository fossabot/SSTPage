import path from 'path'
import { Server } from 'http'
import Express from 'express'

import './modules/welcome'
import renderPage from './modules/pageRendering/renderPage'

import sendApiData from './modules/sendApiData'
import getDataProvider from './modules/dataProviderList'

import configuration from '../../configuration'

import dotEnv from 'dotenv'

dotEnv.config()

const app = new Express();
const server = new Server(app);

const deploymentPath = configuration.path.deployment;
const userPath = configuration.path.user;

global.window = {};

app.use('/assets/', Express.static(path.join(deploymentPath, 'assets')));
app.use('/assets/user/', Express.static(userPath));


app.get('/api/index', (req, res) => {
  sendApiData(req, res, getDataProvider('index'))
});

app.get('/api/journal/list', (req, res) => {
  sendApiData(req, res, getDataProvider('journalList'))
});
app.get('/api/publication/list', (req, res) => {
  sendApiData(req, res, getDataProvider('publicationList'))
});
app.get('/api/publication/detail/:id', (req, res) => {
  sendApiData(req, res, getDataProvider('publicationDetail', req.params))
})
app.get('/api/member/list', (req, res) => {
  sendApiData(req, res, getDataProvider('memberList'))
})
app.get('/api/member/detail/:id', (req, res) => {
  sendApiData(req, res, getDataProvider('memberDetail', req.params))
})
app.get('/api/article/:id', (req, res) => {
  sendApiData(req, res, getDataProvider('article', req.params))
})
app.get('/api/contact', (req, res) => {
  sendApiData(req, res, getDataProvider('contactUs'))
})


app.get('/*', renderPage);

const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console.info(`Server running on http://localhost:${port} [${env}]`);
});