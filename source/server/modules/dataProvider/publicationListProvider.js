import publicationProvider from './publicationProvider'

let publicationList;

publicationList = {data: {}, dataString: ''};

const buildListProvider = (publicationData) => {
  let thisList;

  thisList = {data: {}, dataString: ''};

  thisList.data = publicationData.map(
    publication => ({
      __fileName: publication.__fileName,
      title: publication.title,
      jornal: publication.journal,
      icon: publication.icon,
      year: publication.year,
      authors: publication.authors,
    }));

  thisList.dataString = JSON.stringify(thisList.data);
  publicationList = thisList;
}

publicationProvider.subscribe(buildListProvider, true);

export default publicationList