import path from 'path'
import { Server } from 'http'
import Express from 'express'
import dotEnv from 'dotenv'

import './modules/welcome'
import renderPage from './modules/pageRendering/renderPage'

import sendApiData from './modules/sendApiData'
import getDataProvider from './modules/dataProviderList'

import configuration from '../../configuration'
import routerInfo from '../modules/routing'

dotEnv.config();

const app = new Express();
const server = new Server(app);

const deploymentPath = configuration.path.deployment;
const userPath = configuration.path.user;

global.window = {};

app.use('/assets/', Express.static(path.join(deploymentPath, 'assets')));
app.use('/assets/user/', Express.static(userPath));

routerInfo.map(i => {
  if(!i.api) return false
  
  app.get(i.api, (req, res) => {
    sendApiData(req, res, getDataProvider(i.__id, i.dynamic && req.params));
  });
});

app.get('/api/member/card/:id', (req, res) => {
  sendApiData(req, res, getDataProvider('memberCard', req.params))
});

app.get(/^\/~.*?$/, (req, res) => {
  console.log(req.url);
  res.writeHead(301, {
    'Location': '/member/' + req.url.substring(2), 
    'Expires': (new Date).toGMTString()
  });
  
  res.end();
});


app.get('/*', renderPage);

const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console.info(`Server running on http://localhost:${port} [${env}]`);
});