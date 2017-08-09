import path from 'path'

import configuration from '../../../configuration'

import journalListProvider from './dataProvider/journalListProvider'
import publicationListProvider from './dataProvider/publicationListProvider'
import publicationDetailProvider from './dataProvider/publicationDetailProvider'
import memberListProvider from './dataProvider/memberListProvider'
import memberDetailProvider from './dataProvider/memberDetailProvider'
import articleProvider from './dataProvider/articleProvider'
import contactUsProvider from './dataProvider/contactUsProvider'


const providerList = {
  journalList: journalListProvider,
  publicationList: publicationListProvider,
  publicationDetail: publicationDetailProvider,
  memberList: memberListProvider,
  memberDetail: memberDetailProvider,
  article: articleProvider,
  contactUs: contactUsProvider,
}

const getDataProvider = (name, query) => {
  let validQuery;
  
  validQuery = query && Object.keys(query).length;

  if (query && !query instanceof Object)
    throw new TypeError(`The query of provider ${name} must be an object!`);
  if (!providerList[name] instanceof Function && validQuery)
    throw new TypeError(`The provider ${name} do not accept query!`);
  if(!providerList[name])
    throw new Error(`Provider ${name} not exists!`);
  
  if(validQuery) return providerList[name](query)
  
  return providerList[name]
}

export default getDataProvider