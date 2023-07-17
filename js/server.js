
const URL_BASE = 'https://29.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const ErroreText = {
  GET_DATA: 'Не удвалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму, Попробуйте ещё раз',
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${URL_BASE}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ErroreText.GET_DATA);

const sendData = (body) => load(Route.SEND_DATA,ErroreText.SEND_DATA, Method.POST, body);

export {getData, sendData};
 
