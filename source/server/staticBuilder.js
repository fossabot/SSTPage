import fs from 'fs-extra'
import path from 'path'
import process from 'process'
import dotEnv from 'dotenv'

import routerInfo from '../modules/routing'
import renderPage from './modules/pageRendering/renderPage'
import getDataProvider from './modules/dataProviderList'
import config from '../../configuration'

import './modules/welcome'

dotEnv.config();

console.log(`Building the static website with [${process.env.NODE_ENV}] mode!`);

global.window = {};

const generateParameters = dir => {
  return fs.readdirSync(dir).map(file => path.parse(file).name);
}

const walkParameters = (route, baseType, generator) => {
  let locationBase, urlBase, info;
  
  urlBase = route[baseType];
  locationBase = `./deployment${urlBase}`;

  if(routingParameters[route.__id]) {
    info = contentList[routingParameters[route.__id].id]
              .map(id => ({
                  parameter: {id: id},
                  location: locationBase.replace(':id', id),
                  url: urlBase.replace(':id', id)
                }));
  } else {
    info = [{
      location: locationBase,
      url: urlBase
    }];
  }

  info.forEach(itemInfo => {
    const result = generator(route, itemInfo);
    console.log(`Writing ${baseType} ${result.location}`);

    fs.ensureDirSync(path.parse(result.location).dir);
    fs.outputFileSync(result.location, result.content);
  });
}

const contentList = {
  member: generateParameters('./user/data/members'),
  publication: generateParameters('./user/data/publications'),
  article: generateParameters('./user/data/articles')
}

const routingParameters = {
  memberCard: { id: 'member' },
  memberDetail: { id: 'member' },
  publicationDetail: { id: 'publication' },
  article: {id: 'article'}
}

const copyUserData = ['favicon', 'images', 'publication']

routerInfo.forEach(route => {
  let apiLocationBase, apiInfo, htmlLocationBase;

  if(route.api) {
    walkParameters(route, 'api', (route, itemInfo) => {
      return {
        location: itemInfo.location,
        content: getDataProvider(route.__id, itemInfo.parameter).dataString
      }
    });
  }

  if(route.path && route.path !== '**') {
    walkParameters(route, 'path', (route, itemInfo) => {
      return {
        location: `${itemInfo.location}/index.html`,
        content: renderPage(itemInfo.url)
      }
    });
  }
});

walkParameters({
    __id: 'memberCard',
    api: '/api/member/card/:id.json'
  }, 'api', (route, itemInfo) => {
  return {
    location: itemInfo.location,
    content: getDataProvider(route.__id, itemInfo.parameter).dataString
  }
});

walkParameters({
  __id: '404',
  path: '/404'
}, 'path', (route, itemInfo) => {
return {
  location: `${itemInfo.location}/index.html`,
  content: renderPage(itemInfo.url)
}
});

 copyUserData.forEach(dir => {
  let original, to;
  original = path.join(config.path.user, dir);
  to = path.join(config.path.deployment, 'assets', 'user', dir);
  console.log(`Copying ${original}`);
  fs.copySync(original, to);
});
