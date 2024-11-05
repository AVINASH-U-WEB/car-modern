import React, { useState } from 'react';
import Background from './Components/Background/Background';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const heroData = [
    { text1: "Drive into", text2: "What you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  const handleHeroChange = () => {
    const nextHeroCount = (heroCount + 1) % heroData.length;
    setHeroCount(nextHeroCount);
  };

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={handleHeroChange}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
