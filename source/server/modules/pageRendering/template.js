const template =  ({ body, helmet, pageData, siteConfiguration,  jssCss }) => {
  return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="theme-color" content="#9c27b0">
        <meta name="application-name" content="SSTPage">
        <meta name="msapplication-config" content="/assets/user/favicon/browserconfig.xml">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-title" content="SSTPage">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/user/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/user/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/user/favicon/favicon-16x16.png">
        <link rel="manifest" href="/assets/user/favicon/manifest.json">
        <link rel="mask-icon" href="/assets/user/favicon/safari-pinned-tab.svg" color="#212121">
        <link rel="shortcut icon" href="/assets/user/favicon/favicon.ico">
        <link rel="stylesheet" href="/assets/bundle.css">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      </head>
      
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${body}</div>
        <style id="jss-server-side">${jssCss}</style>
        <script>window.__pageData = ${pageData};window.__siteConfiguration = ${siteConfiguration};window.__directMark = true;</script>
        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `;
};

export default template;
