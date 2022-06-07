import React, { useEffect } from 'react';
import axios from 'axios';

function Login() {
  useEffect(() => {
    login();
  }, []);

  function login() {
    axios
      .post<string>('http://localhost:5000/authentication', {
        username: 'admin',
        password: '1234',
      })
      .then((response) => {
        console.log(response);
      });
  }

  return <></>;
}

export default Login;
