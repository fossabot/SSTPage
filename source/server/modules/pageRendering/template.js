const template =  ({ body, helmet, pageData }) => {
  return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <link rel="stylesheet" href="/assets/bundle.css">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      </head>
      
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${body}</div>
        <script>window.__pageData = ${pageData};window.__directMark = true;</script>
        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `;
};

export default template;
