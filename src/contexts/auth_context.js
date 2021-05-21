import React from "react";
import { createContext, useEffect, useState } from "react"

export const authContext = createContext();

class AuthContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuth: localStorage.getItem("token") !== null ? true : false
        }
    }
    render() {
        return (
            <authContext.Provider value={{ auth: this.state.isAuth }}>
                {this.props.children}
            </authContext.Provider>
        )
    }

}

export default AuthContextProvider;