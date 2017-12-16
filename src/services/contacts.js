import axios from 'axios';

const contacts = {
  getContacts(token, email) {
    return axios({
      method: 'get',
      url: 'https://staging.api.meuprospere.com.br/v1/contacts',
      headers: {
        'content-type': 'application/json',
        'access-token': token,
        uid: email,
      },
    });
  },
};

export default contacts;
