import axios from 'axios';

function fetchBeersByFood(food) {
  return axios
    .get(`${process.env.PUNKAPI_ROOT_ENDPOINT}beers?food=${food}`)
    .then(
      response => {
        const { data } = response;
        return {
          success: true,
          data,
        };
      },
      err => {
        const { statusCode, error, message } = err.response.data;
        return {
          failure: true,
          message: `Error occured while fetching beers: ${statusCode} - ${error} : ${message}`,
        };
      }
    );
}

export default fetchBeersByFood;
