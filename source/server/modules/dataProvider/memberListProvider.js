import _ from 'lodash'

import memberProvider from './memberProvider'

let memberList;

memberList = {data: {}, dataString: ''};

const buildListProvider = () => {
  console.log('Building member list...');
  const thisList = {data: {}, dataString: ''};
  const thisListSummary = memberProvider.data.map(i => _.pick(i, ['__fileName', 'name', 'email', 'homepage', 'group', 'image', 'year', 'researchDirection', 'title']));

  thisList.data = _.groupBy(thisListSummary, 'group');
  
  thisList.dataString = JSON.stringify(thisList.data);

  memberList = thisList;
}

memberProvider.subscribe(buildListProvider, true);

export default memberList