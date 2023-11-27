import dataContext from './dataContext'

const authReducer = (state,action) => {
    switch(action.type) {
        case 'add_token':
            return {...state, token: action.payload}
        case 'remove_token':
            return {...state, token: null}
    }
    
    return state;
    
}

const getToken = dispatch => async() => {
    const token = localStorage.getItem('token-hotel');
    dispatch({
        type: "add_token",
        payload: token
    })
}

const clearToken = dispatch => async() => {
    localStorage.clear('token-hotel')
    dispatch({
        type: "remove_token"
    })
}

export const {Provider, Context} = dataContext(
    authReducer, {getToken, clearToken}, {token: null}
)