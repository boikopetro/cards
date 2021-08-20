type testActionType = {
    type: 'TEST-ACTION'
}
type UnionActionType = testActionType
type StateType = any

const initialState: StateType = {};

export const testReducer = (state: StateType = initialState, action: UnionActionType): StateType => {
    switch (action.type) {
        case "TEST-ACTION": {
            return state;
        }
        default:
            return state;
    }
}

export const testAC = (): testActionType => {
    return {type: 'TEST-ACTION'}
}
