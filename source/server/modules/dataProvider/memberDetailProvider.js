import _ from 'lodash'

import publicationListProvider from './publicationListProvider'
import memberProvider from './memberProvider'

let notFoundInfo, notFoundInfoString;

notFoundInfo = {code: 404, error: 'Member not found'};
notFoundInfoString = JSON.stringify(notFoundInfo);

const memberDetailProvider = query => {
  let targetUser;
  targetUser = _.find(memberProvider.data, {'__fileName': query.id});
  
  if(!targetUser) return {data: notFoundInfo, dataString: notFoundInfoString}
  if(targetUser.error) return targetUser
  
  const publication = _.filter(publicationListProvider.data, item => (
    _.find(item.authors, ['identity', targetUser.identity])
  ));

  targetUser.publication = publication;
  
  return {
    data: targetUser,
    dataString: JSON.stringify(targetUser),
  }
}

export default memberDetailProvider