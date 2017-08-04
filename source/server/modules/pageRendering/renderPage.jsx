import React from 'react'
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware } from 'redux'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { StaticRouter, redirect } from 'react-router'

import thunk from 'redux-thunk'

import template from './template'
import loadPageData from './loadPageData'
import { createInitState, reducer } from '../../../modules/store'

import App from '../../../client/components/App/App'

const renderPage = (req, res) => {
  let helmet, pageData, state;

  helmet = Helmet.renderStatic();
  pageData = loadPageData(req.url);

  let markup;

  const context = {};
  const store = createStore(
    reducer,
    createInitState(pageData.object), 
    applyMiddleware(thunk)
  )

  markup = renderToString(
            <Provider store={store}>
              <StaticRouter context={context} location={req.url}>
                <App serverRequest={req} />
              </StaticRouter>
            </Provider>
          )

  res.send(template({
    body: markup,
    helmet: helmet,
    pageData: pageData.string,
  }));
}

export default renderPage