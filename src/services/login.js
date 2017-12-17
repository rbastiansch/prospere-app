import axios from 'axios';

const login = (email, password) => {
  const result = axios({
    method: 'post',
    url: 'https://staging.api.meuprospere.com.br/v1/auth',
    data: {
      email: `${email}`,
      password: `${password}`,
    },
    headers: {
      'content-type': 'application/json',
    },
  });
  return result;
};

export default login;
