import _ from 'lodash'

import memberProvider from './memberProvider'
import publicationProvider from './publicationProvider'

let notFoundInfo, notFoundInfoString;

notFoundInfo = {code: 404, error: 'Member not found'};
notFoundInfoString = JSON.stringify(notFoundInfo);

const memberCardProvider = query => {
  let targetUser, targetPaper;
  targetUser = _.find(memberProvider.data, {'__fileName': query.id});
  
  if(!targetUser) return {data: notFoundInfo, dataString: notFoundInfoString}
  if(targetUser.error) return targetUser
  
  targetPaper = _.find(publicationProvider.data, item => (
    _.find(item.authors, ['identity', targetUser.identity])
  ));

  targetUser.latestPaper = targetPaper ? 
    {
      exists: true,
      id: targetPaper.__fileName,
      name: targetPaper.title,
    } : {
      exists: false,
    }
  
  return {
    data: targetUser,
    dataString: JSON.stringify(targetUser),
  }
}

export default memberCardProvider