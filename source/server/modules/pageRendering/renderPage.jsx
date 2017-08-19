import React from 'react'
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { StaticRouter, redirect } from 'react-router'
import { MuiThemeProvider } from 'material-ui/styles'

import { JssProvider, SheetsRegistry } from 'react-jss'
import { create } from 'jss'
import preset from 'jss-preset-default'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'

import template from './template'
import loadPageData from './loadPageData'
import theme from '../../../modules/theme'

import ServerProvider from './ServerProvider'
import App from '../../../client/components/App/App'

const renderPage = (req, res) => {
  let helmet, pageData, state, markup;

  helmet = Helmet.renderStatic();
  pageData = loadPageData(req.url);

  const context = {};
  const sheetsRegistry = new SheetsRegistry();
  const jss = create(preset());

  jss.options.createGenerateClassName = createGenerateClassName;

  markup = renderToString(
    <JssProvider registry={sheetsRegistry} jss={jss}> 
      <ServerProvider pageData={pageData.object}>
        <StaticRouter context={context} location={req.url}>
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            <App serverRequest={req} />
          </MuiThemeProvider>
        </StaticRouter>
      </ServerProvider>
    </JssProvider>
  );

  const css = sheetsRegistry.toString();

  res.send(template({
    body: markup,
    helmet: helmet,
    pageData: pageData.string,
    jssCss: css,
  }));
}

export default renderPage