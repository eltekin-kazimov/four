import {createDOM} from "./../middleWare";
import reducerInfo from "./reducerInfo";
import reducerMessage from "./reducerMessage";


let store = {

    state: {

        info: {
            name: 'Taken',
            city: 'Baku',
            age: 27,
            activeFullInfo: true,
            tempName: 'Eltekin',
        },

        message: {
            lastId: 1,
            tempBody: 'Bosdur',
            messages: [
                {id: 1, body: 'Salam'},
            ],
        },

    },

    dispatch(action) {
        reducerInfo(this.state.info, action);
        reducerMessage(this.state.message, action);
        createDOM();
    }

};

export default store;