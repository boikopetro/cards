type profileActionType = {
    type: 'PROFILE-ACTION'
}
type UnionActionType = profileActionType
type StateType = any

const initialState: StateType = {};

export const profileReducer = (state: StateType = initialState, action: UnionActionType): StateType => {
    switch (action.type) {
        case "PROFILE-ACTION": {
            return state;
        }
        default:
            return state;
    }
}

export const profileAC = (): profileActionType => {
    return {type: 'PROFILE-ACTION'}
}
