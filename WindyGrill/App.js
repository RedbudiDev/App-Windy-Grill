import React from 'react';
import { useDispatch } from 'react-redux';
import Router from './src/navigation/Router';
import { checkIfLanguageSelected } from './src/redux/actions/LanguageActions';

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkIfLanguageSelected());
  }, []);
  return (
      <Router />
  );
}

export default App;
