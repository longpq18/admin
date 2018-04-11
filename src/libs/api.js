
import * as types from '../redux/constants/serverAPI';
import {RequestTimeOutException} from "./ServerError";

class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = types.BASE_URL
    const url = `${host}${route}`


    console.log("Api " + verb  + " : "+ url);
    var options = {
      method: verb,
      headers: Api.headers()
    }

    console.log('options: ', options)
    if(params) {
        options.body = JSON.stringify(params)
        console.log("params: " +JSON.stringify(params));
    }

    return Promise.race([
            fetch(url, options),
            new Promise(function (resolve, reject) {
                  setTimeout(() => reject(new RequestTimeOutException()), types.REQUEST_TIME_OUT)
              })
    ]).then((response) => response.json())
      .then((responseJson) => {return responseJson;})
      .catch((err) => {
            throw err;
      });
  }
}


export default Api
