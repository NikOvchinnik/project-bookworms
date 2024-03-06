import axios from 'axios';

export async function getData(endpoint, userCategory = '') {
  axios.defaults.baseURL = `https://books-backend.p.goit.global/books/`;

  let params = {};
  if (userCategory) {
    const str = userCategory.split(' ').join('%20');
    params.category = str;
  }

  return await axios.get(endpoint, {
    params: params,
    paramsSerializer: params => {
      return Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');
    },
  });
}
