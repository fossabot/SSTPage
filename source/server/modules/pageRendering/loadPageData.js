import { matchPath } from 'react-router'

import routerInfo from '../../../modules/routing'
import getDataProvider from '../dataProviderList'

const loadPageData = function(url) {
  const dataSet = {
    object: {},
    string: '{}',
  };

  routerInfo.some(route => {
    let provider;
    const match = matchPath(url, route);

    if(match && route.__id && !route.static) {
      provider = getDataProvider(route.__id, match.params);
      dataSet.object = provider.data;
      dataSet.string = provider.dataString;
    } else {
      dataSet.object = null;
      dataSet.string = JSON.stringify(dataSet.object);
    }

    return match
  });

  return dataSet
}

export default loadPageData