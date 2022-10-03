import { parse } from 'node-html-parser';

export const fetchHTML = async (url: string) => {
  const response = await fetch(url);
  const text = await response.text();
  return parse(text);
};
