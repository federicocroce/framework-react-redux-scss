import React from 'react';

const data = {
    values: {}
}



const reducerTest = (state = data, action) => {
    switch (action.type) {
        case 'SET_VALUES':
            return {
                ...state,
                values: Object.assign(state.values, action.payload),
            };
        default:
            return state
    }
}

export { reducerTest };