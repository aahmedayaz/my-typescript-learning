// Types
export type AuthStateType = null | {
    email: string,
    password: string
}

export type AuthActionType = {
    type: ACTION
}

export const enum ACTION {
    addAuth = 'add-auth'
}


const AuthReducer: React.Reducer<AuthStateType, AuthActionType> = (state, action) => {
    switch(action.type){
        case 'add-auth':
            return {
                email: 'hello',
                password: 'JBH'
            }
        default:
            return state;
    }
}

export default AuthReducer