import publicationProvider from './publicationProvider'

let publicationDetailProvider = query => {
  let thisData;

  thisData = {data: [], dataString: ''};
  thisData.data = publicationProvider.data.find(publication => publication.__fileName === query.id);
  thisData.dataString = JSON.stringify(thisData.data);

  return thisData
}

export default publicationDetailProvider