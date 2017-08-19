import fetch from 'isomorphic-fetch'

import Index from '../client/components/Index/Index'
import MemberList from '../client/components/Member/MemberList'
import PublicationList from '../client/components/Publication/PublicationList'
import PublicationDetail from '../client/components/Publication/PublicationDetail'
import ContactUs from '../client/components/ContactUs/ContactUs'
import Article from '../client/components/Article/Article'
import NotFoundPage from '../client/components/NotFoundPage/NotFoundPage'
import TechTest from '../client/components/Test/TechTest'

import configuration from '../../configuration'

const routes = [
  {
    __id: 'index',
    path: '/',
    component: Index,
    exact: true,
  },
  {
    __id: 'memberList',
    path: '/member',
    component: MemberList,
  },
  {
    __id: 'publicationList',
    path: '/publication',
    exact: true,
    component: PublicationList,
  },
  {
    __id: 'publicationDetail',
    path: '/publication/:id',
    component: PublicationDetail,
  },
  {
    __id: 'contactUs',
    path: '/contact',
    component: ContactUs,
  },
  {
    __id: 'article',
    path: '/article/:id',
    component: Article,
  },
    __id: '404',
    path: '**',
    component: NotFoundPage,
    static: true,
  }
]

export default routes