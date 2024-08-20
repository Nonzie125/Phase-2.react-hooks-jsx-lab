import React from 'react';

const name = "Nonzamo";  
const city = "Kamakis";  

const Home = () => {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
};

export default Home;
