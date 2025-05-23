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
    'https://script.google.com/macros/s/AKfycbxvqkL4x1AyfyfSLH7gp978iciOuCZnw4p-suh7XVJH87xtrWjCaBtXc5Ic_FPSn6YgIA/exec?action=getTasks',
  // ,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});
