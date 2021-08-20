type registrationActionType = {
    type: 'REGISTRATION-ACTION'
}
type UnionActionType = registrationActionType
type StateType = any

const initialState: StateType = {};

export const registrationReducer = (state: StateType = initialState, action: UnionActionType): StateType => {
    switch (action.type) {
        case "REGISTRATION-ACTION": {
            return state;
        }
        default:
            return state;
    }
}

export const registrationAC = (): registrationActionType => {
    return {type: 'REGISTRATION-ACTION'}
}
