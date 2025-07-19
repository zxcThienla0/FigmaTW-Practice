import Header from "./components/header/header"
import MainInfo from "./components/mainInfo/mailinfo"
import PlacecComp from "./components/placecComp/placecComp"
import Interesting from "./components/interesting/interesting"
import TopPlacec from "./components/topPlacec/topPlacec"

import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    window.onload = () => {
      setLoading(false);
    };

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && (
        <div id="preloader" className="preloader">
          <div className="spinner"></div>
        </div>
      )}
      <Header />
      <MainInfo />
      <PlacecComp />
      <Interesting />
      <TopPlacec />
    </>
  )
}

export default App
