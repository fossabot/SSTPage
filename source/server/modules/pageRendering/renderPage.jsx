import React from 'react'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { StaticRouter, redirect } from 'react-router'

import template from './template'
import loadPageData from './loadPageData'

import ServerProvider from './ServerProvider'
import App from '../../../client/components/App/App'

const renderPage = (req, res) => {
  let helmet, pageData, state;

  helmet = Helmet.renderStatic();
  pageData = loadPageData(req.url);

  let markup;

  const context = {};

  markup = renderToString(
            <ServerProvider pageData={pageData.object}>
              <StaticRouter context={context} location={req.url}>
                <App serverRequest={req} />
              </StaticRouter>
            </ServerProvider>
          )

  res.send(template({
    body: markup,
    helmet: helmet,
    pageData: pageData.string,
  }));
}

export default renderPage