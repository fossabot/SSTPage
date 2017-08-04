const sendApiData = (req, res, provider) => {
  let code;
  res.setHeader("Content-Type", "application/json");
  if(provider.data.error) {
    code = provider.data.code || 500;
    res.status(code).send(provider.dataString);
  }
  else
    res.send(provider.dataString);
}


export default sendApiData