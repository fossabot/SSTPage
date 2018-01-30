import process from 'process'
import config from '../../../../configuration'

const template =  ({ body, helmet, pageData, siteConfiguration,  jssCss }) => {
  const html = `
  <!DOCTYPE html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:locale" content="zh_CN" />
      <meta property="og:image" content="${config.url.base}/assets/user/favicon/ogp.png" />
      ${helmet.meta.toString()}
      <meta name="twitter:card" content="summary" />
      <meta name="theme-color" content="#9c27b0" />
      <meta name="application-name" content="SSTPage" />
      <meta name="renderer" content="webkit" />
      <meta name="force-rendering" content="webkit" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="msapplication-config" content="/assets/user/favicon/browserconfig.xml" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="SSTPage" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      ${helmet.title.toString()}
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/user/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/user/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/user/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/assets/user/favicon/manifest.json" />
      <link rel="mask-icon" href="/assets/user/favicon/safari-pinned-tab.svg" color="#212121" />
      <link rel="shortcut icon" href="/assets/user/favicon/favicon.ico" />
      <link rel="stylesheet" href="/assets/bundle.css" />
      ${helmet.link.toString()}
      ${helmet.script.toString()}
      <style id="jss-server-side">${jssCss}</style>
    </head>

    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${body}</div>
      <script>window.__pageData = ${pageData};window.__siteConfiguration = ${siteConfiguration}</script>
      <script src="/assets/bundle.js"></script>
      <script>setTimeout(function(){if(window.navigator.userAgent.match(/MSIE|Trident/g) !== null) document.write('<link rel="stylesheet" href="/assets/bundle.css"><div class="ob_wrap"><div id="ob"><p>您的浏览器遵循了过时的标准，我们无法正常显示站点的内容。</p><p>如果您正在使用「360安全浏览器」、「搜狗高速浏览器」、「猎豹极速浏览器」等双核浏览器，请将浏览模式切换到「极速模式」。</p><p>或者您可以<a href="http://outdatedbrowser.com/zh-cn">点此安装最新版本的浏览器</a>来访问我们的站点。</p></div>')}, 1000);</script>
    </body>
  </html>
`
  return process.env.NODE_ENV === 'production' ? html.replace(/[\r\n]+/g, '').replace(/ +/g, ' ') : html;
};

export default template;
