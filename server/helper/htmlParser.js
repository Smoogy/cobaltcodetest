import request from 'request-promise-native';
import { load } from 'cheerio';
import { map } from 'lodash/fp';

export const parseHtml = async (uri, tag) => {
  const newUri = uri.indexOf('http://') > -1 ? uri : `http://${uri}`;
  const body = await request({ uri: newUri });
  const html = load(body);
  const tags = html(tag);
  let result = {};

  result[tag] = map((item) => {
    return { innerText: html(item).text(), innerHtml: html(item).html() };
  })(tags);

  return result;
}