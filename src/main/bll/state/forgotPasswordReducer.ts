type forgotPasswordActionType = {
    type: 'FORGOT-PASSWORD-ACTION'
}
type UnionActionType = forgotPasswordActionType
type StateType = any

const initialState: StateType = {};

export const forgotPasswordReducer = (state: StateType = initialState, action: UnionActionType): StateType => {
    switch (action.type) {
        case "FORGOT-PASSWORD-ACTION": {
            return state;
        }
        default:
            return state;
    }
}

export const forgotPasswordAC = (): forgotPasswordActionType => {
    return {type: 'FORGOT-PASSWORD-ACTION'}
}
