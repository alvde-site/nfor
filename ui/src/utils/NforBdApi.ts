// type TNforBdHeaders = {
//   'Content-Type': string;
// };

type TNforBdApi = {
  baseUrl: string;
  // headers: TNforBdHeaders;
};

class NforBdApi {
  _baseUrl: string;

  // _headers: TNforBdHeaders;

  constructor({
    baseUrl,
    // headers
  }: TNforBdApi) {
    this._baseUrl = baseUrl;
    // this._headers = headers;
  }

  getBdData() {
    return fetch(
      `${this._baseUrl}`
      //   , {
      //   headers: this._headers,
      // }
    );
    // .then(this._checkResponse);
  }

  // _checkResponse(res: Response): INforBd[] | PromiseLike<INforBd[]> {
  //   return res.ok ? res.json() : Promise.reject(new Error(`Ошибка ${res.status}`));
  // }
}

export const NforBdApiSet = new NforBdApi({
  baseUrl:
    'https://script.google.com/macros/s/AKfycby1IaJ26u-BGcwEyE0yZcQrv4SyXsNuAdI8ua5LyEhE168zZg46rWA6XwRXloGD1FvlDA/exec?action=getTasks',
  // ,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});
