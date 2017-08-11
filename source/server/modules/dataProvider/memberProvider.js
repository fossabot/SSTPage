import path from 'path'

import _ from 'lodash'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'

let memberProvider = new dataProvider({
  name: 'Member list',
  location: path.join(configuration.path.data, 'members'),
  init: true,
  watch: true,
  then: data => _.orderBy(data, ['order', 'year']),
});

export default memberProvider