import fetch from 'isomorphic-fetch'

import Index from '../client/components/Index/Index'
import MemberList from '../client/components/Member/MemberList'
import PublicationList from '../client/components/Publication/PublicationList'
import PublicationDetail from '../client/components/Publication/PublicationDetail'
import NotFoundPage from '../client/components/NotFoundPage/NotFoundPage'

import configuration from '../../configuration'

const routes = [
  {
    __id: 'home',
    path: '/',
    component: Index,
    exact: true,
  },
  {
    __id: 'memberList',
    path: '/member',
    component: MemberList,
    dataProvider: 'memberList',
  },
  {
    __id: 'publicationList',
    path: '/publication',
    exact: true,
    component: PublicationList,
    dataProvider: 'publicationList',
  },
  {
    __id: 'publicationDetail',
    path: '/publication/:id',
    component: PublicationDetail,
    dataProvider: 'publicationDetail',
  },
  {
    __id: '404',
    path: '',
    component: NotFoundPage,
  }
]

export default routes