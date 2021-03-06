import _ from 'lodash'
import publicationProvider from './publicationProvider'

let publicationList;

publicationList = {data: {}, dataString: ''};

const buildListProvider = (publicationData) => {
  console.log('Building publication list...');
  let thisList;

  thisList = {data: {}, dataString: ''};

  thisList.data = _.  orderBy(publicationData.map(
    publication => ({
      __fileName: publication.__fileName,
      title: publication.title,
      jornal: publication.journal,
      icon: publication.icon,
      year: publication.year,
      authors: publication.authors,
    })), ['year'], ['desc']);

  thisList.dataString = JSON.stringify(thisList.data);
  publicationList = thisList;
}

publicationProvider.subscribe(buildListProvider, true);

export default publicationList