import React from 'react';
import TestComponent from './components/TestComponent';


type IProps = {};

const App: React.FC<IProps> = () => {
  console.log('Test');

  return (
    <div>
      <TestComponent />
    </div>
  );
};

export default App;
