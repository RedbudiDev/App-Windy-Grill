import React from 'react';
import { useDispatch, View } from 'react-redux';
import Loading from './src/components/Loading';
import Router from './src/navigation/Router';
import SplashScreen from 'react-native-splash-screen';
import { checkIfUserLoggedIn } from './src/redux/actions/AuthActions';
import { checkIfLanguageSelected } from './src/redux/actions/LanguageActions';

export const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  function _fetchAll() {
    dispatch(checkIfLanguageSelected());
    dispatch(checkIfUserLoggedIn());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  React.useEffect(() => {
    SplashScreen.hide();
    setLoading(true);
    _fetchAll();
  }, []);
  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <Router />
  );
}

export default App;
