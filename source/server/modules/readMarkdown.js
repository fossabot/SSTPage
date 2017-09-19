import fs from 'fs'
import path from 'path'
import commonmark from 'commonmark'

const readMarkdown = (text) => {
  const reader = new commonmark.Parser({safe: true});
  const writer = new commonmark.HtmlRenderer();
  return writer.render(reader.parse(text));
}

export default readMarkdown