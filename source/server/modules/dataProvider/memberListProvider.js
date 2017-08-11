import _ from 'lodash'

import memberProvider from './memberProvider'

let memberList;

memberList = {data: {}, dataString: ''};

const buildListProvider = memberData => {
  console.log('Building member list...');
  let thisList;

  thisList = {data: {}, dataString: ''};

  thisList.data = _.groupBy(memberProvider.data, 'group');

  thisList.dataString = JSON.stringify(thisList.data);
  memberList = thisList;
}

memberProvider.subscribe(buildListProvider, true);

export default memberList