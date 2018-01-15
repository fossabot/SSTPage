const path = require('path');

const rootPath = global.__root || __dirname;

const config = {
  path: {
    root: rootPath,
    server: path.join(rootPath, 'source', 'server'),
    client: path.join(rootPath, 'source', 'client'),
    deployment: path.join(rootPath, 'deployment'),
    user: path.join(rootPath, 'user'),
    data: path.join(rootPath, 'user', 'data'),
  },
  siteTitle: '人际语言交流课题组',
};

module.exports = config;