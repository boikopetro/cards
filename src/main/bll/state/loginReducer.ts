type loginActionType = {
    type: 'LOGIN-ACTION'
}
type UnionActionType = loginActionType
type StateType = any

const initialState: StateType = {};

export const loginReducer = (state: StateType = initialState, action: UnionActionType): StateType => {
    switch (action.type) {
        case "LOGIN-ACTION": {
            return state;
        }
        default:
            return state;
    }
}

export const loginPageAC = (): loginActionType => {
    return {type: 'LOGIN-ACTION'}
}
