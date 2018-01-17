import path from 'path'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'

let tutorIntroductionProvider;

tutorIntroductionProvider = new dataProvider({
  name: 'GroupIntroduction',
  location: path.join(configuration.path.data, 'contents', 'tutorIntroduction.md'),
  init: true,
  watch: true,
  type: 'md',
});

export default tutorIntroductionProvider;