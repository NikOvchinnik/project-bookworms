function getData(endpoit) {
  const url = `https://books-backend.p.goit.global/books/${endpoit}`;
  return axios.get(url);
}
