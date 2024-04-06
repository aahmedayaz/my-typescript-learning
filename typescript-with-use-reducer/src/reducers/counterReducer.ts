import React from 'react'

// Types
export type CounterStateType = {
    count: number
}

export type CounterActionType = {
    type: ACTION
}

export const enum ACTION {
    increment = 'Increment',
    decrement = 'Decrement'
}

const CounterReducer: React.Reducer<CounterStateType, CounterActionType> = (state, action)  => {
    switch(action.type){
        case 'Increment' :
            return {
                count: state.count + 1
            }
        case 'Decrement' :
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default CounterReducer