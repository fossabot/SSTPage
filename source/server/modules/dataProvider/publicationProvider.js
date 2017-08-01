import path from 'path'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'
import journalList from './journalListProvider'
import memberList from './memberListProvider'

const integratingData = (publicationData) => {
  return publicationData.map(publication => {
    let targetIcon;
    targetIcon = journalList.data.find(journal => journal.name === publication.journal)
    publication.icon = targetIcon.icon;
    publication.logo = targetIcon.logo;
    publication.authors = publication.authors.map(author => {
      let memberDetail;
      
      memberDetail = memberList.data.find(member => member.identity === author);
      if(!memberDetail) return { name: author, __offStaff: true, }
      
      return { name: memberDetail.name, image: memberDetail.image, __offStaff: false, }
    });

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