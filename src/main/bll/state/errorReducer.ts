type errorPageActionType = {
    type: 'ERROR-ACTION'
}
type UnionActionType = errorPageActionType
type StateType = any

const initialState: StateType = {};

export const errorReducer = (state: StateType = initialState, action: UnionActionType): StateType => {
    switch (action.type) {
        case "ERROR-ACTION": {
            return state;
        }
        default:
            return state;
    }
}

export const errorAC = (): errorPageActionType => {
    return {type: 'ERROR-ACTION'}
}
