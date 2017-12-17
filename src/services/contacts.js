import axios from 'axios';

const getContacts = (token, email) => {
  const result = axios({
    method: 'get',
    url: 'https://staging.api.meuprospere.com.br/v1/contacts',
    headers: {
      'content-type': 'application/json',
      'access-token': token,
      uid: email,
    },
  });
  return result;
};

const getContact = (token, email, id) => {
  const result = axios({
    method: 'get',
    url: `https://staging.api.meuprospere.com.br/v1/contacts/${id}`,
    headers: {
      'content-type': 'application/json',
      'access-token': token,
      uid: email,
    },
  });
  return result;
};

const addContact = (token, email, data) => {
  const result = axios({
    method: 'post',
    url: 'https://staging.api.meuprospere.com.br/v1/contacts',
    headers: {
      'content-type': 'application/json',
      'access-token': token,
      uid: email,
    },
    data,
  });
  return result;
};

export { getContacts, getContact, addContact };
