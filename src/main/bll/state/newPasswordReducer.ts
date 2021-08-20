type newPasswordActionType = {
    type: 'NEW-PASSWORD-ACTION'
}
type UnionActionType = newPasswordActionType
type StateType = any

const initialState: StateType = {};

export const newPasswordReducer = (state: StateType = initialState, action: UnionActionType): StateType => {
    switch (action.type) {
        case "NEW-PASSWORD-ACTION": {
            return state;
        }
        default:
            return state;
    }
}

export const newPasswordAC = (): newPasswordActionType => {
    return {type: 'NEW-PASSWORD-ACTION'}
}
