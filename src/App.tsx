import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Fluke Keeper!</h1>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/login">Login</Link>&nbsp;
      <Link to="/weather-forecast">WeatherForecast</Link>
    </>
  );
}

export default App;
