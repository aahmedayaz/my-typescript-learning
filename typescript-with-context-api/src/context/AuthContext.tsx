import React, {createContext, useReducer} from 'react'
import AuthReducer from '../reducers/AuthReducer'
import {ACTION, AuthActionType} from '../reducers/AuthReducer'

// Types
type AuthContextType = null | {
    auth: authType,
    // setAuth: React.Dispatch<React.SetStateAction<authType>>  
    addAuth: () => void
}

type AuthContextProvider = {
    children: React.ReactNode
}

type authType = null | {
    email: string,
    password: string
}


// Context
const AuthContext = createContext<AuthContextType>(null)
export default AuthContext

const AuthContextProvider: React.FC<AuthContextProvider> = ({children}) => {

    // State
    const [auth, dispatch]: [authType, React.Dispatch<AuthActionType>] = useReducer(AuthReducer, null)

    const addAuth = () => {
        dispatch({type: ACTION.addAuth})
    }

    return (
        <AuthContext.Provider value={{auth, addAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider}