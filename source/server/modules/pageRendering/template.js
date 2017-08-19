const template =  ({ body, helmet, pageData, jssCss }) => {
  return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="theme-color" content="#9c27b0">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <link rel="stylesheet" href="/assets/bundle.css">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      </head>
      
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${body}</div>
        <style id="jss-server-side">${jssCss}</style>
        <script>window.__pageData = ${pageData};window.__directMark = true;</script>
        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `;
};

export default template;
