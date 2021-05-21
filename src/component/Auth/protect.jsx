import React from 'react';
import { Redirect , Route } from 'react-router-dom';

function Protect({isAuth: isAuth, component: Component, ...rest}){
        console.log(isAuth)
  return <Route {...rest} render={({location})=> {
      if(isAuth === 'Go'){
        console.log(isAuth)
        return  <Component />
      }else {
         return <Redirect to={{pathname:'/', state:{from: location} } }  />
      }
  }}  />

}

export default Protect;
