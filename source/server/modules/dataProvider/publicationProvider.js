import path from 'path'

import _ from 'lodash'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'
import journalList from './journalListProvider'
import memberList from './memberListProvider'

import queryAuthors from '../queryAuthors'

const integratingData = (publicationData) => {
  let sortedData = _.sortBy(publicationData, ['year'], ['desc']);
  return sortedData.map(publication => {
    let targetIcon;
    targetIcon = journalList.data.find(journal => journal.name === publication.journal)
    publication.icon = targetIcon.icon;
    publication.logo = targetIcon.logo;
    publication.authors = queryAuthors(publication.authors);
    
    return publication
  });
}

const update = () => publicationListProvider.update();

let publicationListProvider = new dataProvider({
  name: 'Publication List',
  location: path.join(configuration.path.data, 'publications'),
  init: true,
  watch: true,
  then: integratingData,
});

journalList.subscribe(update);
memberList.subscribe(update);

export default publicationListProvider