const UnActive = 'UnActive';
const UpdateName = 'UpdateName';
const UpdateTempName = 'UpdateTempName';


function reducerInfo(state, action) {
    switch (action.type) {
        case UnActive:
            state.activeFullInfo = !state.activeFullInfo;
            break;
        case UpdateName:
            if (state.name !== state.tempName && state.tempName) {
                state.name = state.tempName;
            }
            break;
        case UpdateTempName:
            state.tempName = action.body;
            break;
        default:
            break;
    }

    return state
}

export function createActionUnActive() {
    return {type: UnActive};
}

export function createActionUpdateTempName(value){
    return {type: UpdateTempName, body: value};
}

export function createActionUpdateName(){
    return {type: UpdateName};
}

export default reducerInfo;