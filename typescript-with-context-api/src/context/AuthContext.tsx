import React, {createContext, useState} from 'react'

// Types
type AuthContextType = null | {
    auth: authType,
    setAuth: React.Dispatch<React.SetStateAction<authType>>
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
    const [auth, setAuth] = useState<authType>(null)

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider}