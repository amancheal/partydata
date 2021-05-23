import { useContext } from 'react';
import { Redirect , Route } from 'react-router-dom';
import { authContext } from '../../contexts/auth_context';

function Protect({ component: Component, ...rest }) {
  const { auth } = useContext(authContext);
  return <Route {...rest} render={({location})=> {
    if (auth) {
        return  <Component />
      }else {
         return <Redirect to={{pathname:'/', state:{from: location} } }  />
      }
  }}  />

}
export default Protect;
