import axios from 'axios';

export async function getData(endpoint, userCategory = '') {
  const url = `https://books-backend.p.goit.global/books/${endpoint}`;

  let params = {};
  if (userCategory) {
    const str = userCategory.split(' ').join('%20');
    params.category = str;
  }

  return await axios.get(url, {
    params: params,
    paramsSerializer: params => {
      return Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');
    },
  });
}
