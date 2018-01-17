import _ from 'lodash'

import memberProvider from './memberProvider'
import tutorIntroductionProvider from './tutorIntroductionProvider'

let memberList;

memberList = {data: {}, dataString: ''};

const buildListProvider = () => {
  console.log('Building member list...');
  const thisList = {data: {}, dataString: ''};
  const thisListSummary = memberProvider.data.map(i => _.pick(i, ['__fileName', 'name', 'email', 'homepage', 'group', 'image', 'year', 'researchDirection', 'title']));

  thisList.data = _.groupBy(thisListSummary, 'group');
  thisList.data.tutorIntroduction = tutorIntroductionProvider.data || {code: 404, error: 'Tutor introduction not found'};
  
  thisList.dataString = JSON.stringify(thisList.data);

  memberList = thisList;
}

memberProvider.subscribe(buildListProvider, true);

export default memberList