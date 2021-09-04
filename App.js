import {getLanguage} from 'localize';
import RootNavigation from 'navigation';
import React, {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    getLanguage();
  }, []);
  return <RootNavigation />;
};
export default App;
