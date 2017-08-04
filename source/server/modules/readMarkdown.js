import fs from 'fs'
import path from 'path'
import commonmark from 'commonmark'

const readMarkdown = (location) => {
  let data, rawData;

  try { rawData = fs.readFileSync(location, 'utf8') } 
  catch (e) { return {error: 'Can not read file.', msg: e.message} }

  try {
    const reader = new commonmark.Parser({safe: true});
    const writer = new commonmark.HtmlRenderer();
    data = writer.render(reader.parse(rawData));
  } catch (e) {
    return {error: `Can't resolve ${path.basename(location)}.`, msg: e.message};
  }

  return data;
}

export default readMarkdown