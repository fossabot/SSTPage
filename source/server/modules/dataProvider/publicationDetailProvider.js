import publicationProvider from './publicationProvider'

let publicationDetailProvider = query => {
  let queryResult, thisData;

  queryResult = publicationProvider.data.find(publication => publication.__fileName === query.id);
  
  thisData = {data: [], dataString: ''};
  thisData.data = queryResult ? queryResult : {code: 404, error: 'Publication not found'};
  thisData.dataString = JSON.stringify(thisData.data);

  return thisData
}

export default publicationDetailProvider