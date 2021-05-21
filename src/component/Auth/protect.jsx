import React from 'react';
import { Redirect , Route } from 'react-router-dom';

function Protect({isAuth: isAuth, component: Component, ...rest}){

  return <Route {...rest} render={({location})=> {
      if(isAuth === 'Go'){
        return  <Component />
      }else {
         return <Redirect to={{pathname:'/', state:{from: location} } }  />
      }
  }}  />

}

export default Protect;
