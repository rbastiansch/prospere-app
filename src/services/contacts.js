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

  getContact(token, email, id) {
    return axios({
      method: 'get',
      url: `https://staging.api.meuprospere.com.br/v1/contacts/${id}`,
      headers: {
        'content-type': 'application/json',
        'access-token': token,
        uid: email,
      },
    });
  },

  addContact(token, email, data) {
    return axios({
      method: 'post',
      url: 'https://staging.api.meuprospere.com.br/v1/contacts',
      headers: {
        'content-type': 'application/json',
        'access-token': token,
        uid: email,
      },
      data,
    });
  },
};

export default contacts;
