const updateTempMesBody = 'updateTempMesBody';
const addMessage = 'addMessage';


function reducerMessage(state, action) {
    switch (action.type) {
        case updateTempMesBody:
            state.tempBody = action.body;
            break;
        case addMessage:
            if (state.tempBody) {
                state.lastId++;
                state.messages.push({id: state.lastId, body: state.tempBody});
                state.tempBody = '';
            }
            break;
        default:
            break;
    }

    return state
}

export function createActionAddMessage() {
    return {type: addMessage};
}

export function createActionUpdateTempMesBody(value){
    return {type: updateTempMesBody, body: value};
}


export default reducerMessage;