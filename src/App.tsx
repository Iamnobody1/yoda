import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Fluke Keeper!</h1>
      <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/weather-forecast">WeatherForecast</Link>
    </>
  );
}

export default App;
