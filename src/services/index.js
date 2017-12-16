import axios from 'axios';

export default function login(email, password) {
  return axios({
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
}
