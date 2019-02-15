const axios = require('axios');

const API_KEY = '2f7f33f129a6471bb9104982339d81ce';
const BASE_URL = 'https://newsapi.org/v2';

module.exports.getHeadlinesForTerm = (terms) => {
  console.log('terms', terms);
  let q = '';

  terms.forEach((term) => {
    q += `&q=${term}`;
  });

  console.log('q', q);

  const url = `${BASE_URL}/everything?apiKey=${API_KEY}${q}`;

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data.articles);
  });
};
