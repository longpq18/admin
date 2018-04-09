// import APIs from './../constants/serverAPI'

class User {
  // static getAllUsers() {
  //   let request = new Request('http://localhost:4000/users', {
  //     method: 'GET',
  //     headers: "Content-Type: application/json"
  //   });
  //
  //   return fetch(request).then(response => {
  //     return response.json();
  //   }).catch(error => {
  //     return error;
  //   });
  // }

  static getAllUsers() {
    return fetch('http://localhost:4000/users').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default User
