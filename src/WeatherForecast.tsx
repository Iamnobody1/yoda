import React, { useEffect } from 'react';

function WeatherForecast() {
  useEffect(() => {
    fetch('https://localhost:5001/WeatherForecast', {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <h1>WeatherForecast Gate!</h1>
    </>
  );
}

export default WeatherForecast;
