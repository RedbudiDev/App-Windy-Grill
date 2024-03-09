import React from 'react';
import { useDispatch } from 'react-redux';
import Router from './src/navigation/Router';
import { checkIfUserLoggedIn } from './src/redux/actions/AuthActions';
import { checkIfLanguageSelected } from './src/redux/actions/LanguageActions';

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(checkIfLanguageSelected());
    dispatch(checkIfUserLoggedIn());
  }, []);
  return (
      <Router />
  );
}

export default App;
