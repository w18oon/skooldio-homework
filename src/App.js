import React, { useState, useEffect } from 'react';
import './App.css';

import Asset from './Asset';

function App() {
  let [assets, setAssets] = useState([]);

  useEffect(() => {
    fetch('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
    .then(response => response.json())
    .then(data => setAssets(data));
  }, []);

  return (
    <div className="App">
      {assets && assets.map(asset => (
        <Asset key={asset.id} data={asset} />
      ))}
    </div>
  );
}

export default App;
