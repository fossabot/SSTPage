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
    api: '/api/index',
    exact: true,
    component: Index,
  },
  {
    __id: 'memberList',
    path: '/member',
    api: '/api/member/list',
    component: MemberList,
  },
  {
    __id: 'publicationList',
    path: '/publication',
    api: '/api/publication/list',
    exact: true,
    component: PublicationList,
  },
  {
    __id: 'publicationDetail',
    path: '/publication/:id',
    api: '/api/publication/detail/:id',
    dynamic: true,
    component: PublicationDetail,
  },
  {
    __id: 'contactUs',
    path: '/contact',
    api: '/api/contact',
    component: ContactUs,
  },
  {
    __id: 'article',
    path: '/article/:id',
    api: '/api/article/:id',
    component: Article,
    dynamic: true,
  },
  {
    __id: '404',
    path: '**',
    component: NotFoundPage,
    static: true,
  }
]

export default routes