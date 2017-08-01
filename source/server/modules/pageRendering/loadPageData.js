import { matchPath } from 'react-router'

import routerInfo from '../../../modules/routing'
import getDataProvider from '../dataProviderList'

const loadPageData = function(url) {
  const dataSet = {
    object: {},
    string: {}
  };

  routerInfo.some(route => {
    let provider;
    const match = matchPath(url, route);

    if(match && route.__id && route.dataProvider) {
      provider = getDataProvider(route.dataProvider, match.params)
      dataSet.object[route.dataProvider] = provider.data
      dataSet.string[route.dataProvider] = provider.dataString
    }

    return match
  });

  return dataSet
}

export default loadPageData