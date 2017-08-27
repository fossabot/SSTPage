import path from 'path'
import _ from 'lodash'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'

let groupIntroductionProvider, configListProvider, siteConfigContent;

siteConfigContent = {data: {}, dataString: '{}'};

groupIntroductionProvider = new dataProvider({
  name: 'GroupIntroduction',
  location: path.join(configuration.path.data, 'contents', 'groupIntroduction.md'),
  init: true,
  watch: true,
  type: 'md',
});

configListProvider = new dataProvider({
  name: 'SiteConfig',
  location: path.join(configuration.path.data, 'configurations', 'site.yaml'),
  init: true,
  watch: true,
  type: 'yaml',
});

const buildSiteConfig = () => {
  console.log('Building Site Configuration...');

  if(!configListProvider.data) throw ReferenceError('Configuration file not found!');
  
  let thisData, groupIntroduction;

  thisData = {data: {}, dataString: ''};

  groupIntroduction = {
    groupIntroduction: groupIntroductionProvider.data || {code: 404, error: 'Group introduction not found'}
  };

  thisData.data = _.merge(configListProvider.data, groupIntroduction);

  thisData.dataString = JSON.stringify(thisData.data);

  siteConfigContent = thisData;
}

groupIntroductionProvider.subscribe(buildSiteConfig, true);

export default siteConfigContent