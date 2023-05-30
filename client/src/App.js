import React from 'react';
import MyRouter from './components/router/MyRouter';
import EthProvider from './contexts/EthContext/EthProvider';

function App() {
  return (
    <EthProvider>
      <MyRouter />
    </EthProvider>
  );
}

export default App;
