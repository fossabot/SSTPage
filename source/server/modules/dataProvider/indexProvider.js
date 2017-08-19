import path from 'path'
import _ from 'lodash'

import dataProvider from '../dataProvider'
import configuration from '../../../../configuration'
import publicationProvider from './publicationProvider'

let groupIntroductionProvider, tutorIntroductionProvider, indexContent;

groupIntroductionProvider = new dataProvider({
  name: 'GroupIntroduction',
  location: path.join(configuration.path.data, 'contents', 'groupIntroduction.md'),
  init: true,
  watch: true,
  type: 'md',
});

tutorIntroductionProvider = new dataProvider({
  name: 'GroupIntroduction',
  location: path.join(configuration.path.data, 'contents', 'tutorIntroduction.md'),
  init: true,
  watch: true,
  type: 'md',
});

indexContent = {data: {}, dataString: ''};

const buildIndexContents = () => {
  console.log('Building Index contents...');

  let publications, thisData;

  thisData = {data: {}, dataString: ''};

  publications = publicationProvider.data
                 .filter(publication => typeof(publication['index-order']) === 'number' && publication['cover']);
  
  if(publications) 
    publications = publications
                     .slice(0, 3)
                     .sort((a, b) => a['index-order'] - b['index-order'])
                     .map(
      publication => {
        let abstract, result;

        abstract = publication.abstract.substr(0, 428).split(' ').slice(0, -1).join(' ') + '...';
        
        result = _.pick(publication, ['__fileName', 'title', 'authors', 'cover', 'index-order']);
        result.abstract = abstract;

        return result;
      }
    );


  thisData.data.publication = publications || {code: 404, error: 'Publication not found'};
  thisData.data.groupIntroduction = groupIntroductionProvider.data || {code: 404, error: 'Group introduction not found'};
  thisData.data.tutorIntroduction = tutorIntroductionProvider.data || {code: 404, error: 'Tutor introduction not found'};

  thisData.dataString = JSON.stringify(thisData.data);

  indexContent = thisData;
}

publicationProvider.subscribe(buildIndexContents, true);
groupIntroductionProvider.subscribe(buildIndexContents);
tutorIntroductionProvider.subscribe(buildIndexContents);



export default indexContent