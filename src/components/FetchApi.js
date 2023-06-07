const BASE_URL = "https://restcountries.com/v3.1/";
const FetchApi = (parametr) => {
  return fetch(`${BASE_URL}${parametr}`).then((response) => response.json());
};

export default FetchApi;
