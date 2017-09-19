import path from 'path'
import _ from 'lodash'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'

import recentResearchProvider from './recentResearchProvider'

let research;

research = {data: {}, dataString: ''};

let projectProvider = new dataProvider({
  name: 'Recent Research',
  location: path.join(configuration.path.data, 'contents', 'project.yaml'),
  init: true,
  watch: true,
});

const buildListProvider = () => {
  console.log('Building research page...');
  const thisList = {data: {}, dataString: ''};
  
  thisList.data.project = _.groupBy(projectProvider.data, 'role');
  thisList.data.recentResearch = recentResearchProvider.data;
  
  thisList.dataString = JSON.stringify(thisList.data);

  research = thisList;
}

projectProvider.subscribe(buildListProvider, true);
recentResearchProvider.subscribe(buildListProvider);

export default research