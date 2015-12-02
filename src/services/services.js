import $ from 'jquery';

const apiKey = '3b4bf5d1b73844a46d25e5d15bbbde79';

function makeGetRequest(urlPartial = '') {
  const url = `http://gateway.marvel.com/v1/public/${urlPartial + (urlPartial.indexOf('?') >= 0 ? '&' : '?')}apikey=${apiKey}`;
  return $.get(url);
}

function getHeroes(urlPartial = '') {
  return makeGetRequest(`characters${urlPartial}`);
}

const services = {
  getHeroes: getHeroes,
};

export { services as default, getHeroes };
