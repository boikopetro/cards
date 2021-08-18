
type SomeReducerActionType = {
    type: 'SOME-REDUCER-ACTION'
}
type UnionActionType = SomeReducerActionType
type TaskStateType = any

const initialState: TaskStateType = {};

export const someReducer = (state: TaskStateType = initialState, action: UnionActionType): TaskStateType => {
    switch (action.type) {
        case "SOME-REDUCER-ACTION": {
            return state;
    }
        default:
            return state;
    }
}

export const someReducerAC = ():SomeReducerActionType => {
    return {type: 'SOME-REDUCER-ACTION'}
}
