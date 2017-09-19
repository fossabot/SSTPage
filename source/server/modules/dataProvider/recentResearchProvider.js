import path from 'path'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'

let recentResearch = new dataProvider({
  name: 'Recent Research',
  location: path.join(configuration.path.data, 'contents', 'recentResearch.yaml'),
  init: true,
  watch: true
});

export default recentResearch