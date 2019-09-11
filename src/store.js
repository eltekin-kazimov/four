import {createDOM} from "./index";


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

    unActive() {
        this.state.info.activeFullInfo = !this.state.info.activeFullInfo;
        createDOM();
    },

    updateName() {
        if (this.state.info.name !== this.state.info.tempName && this.state.info.tempName) {
            this.state.info.name = this.state.info.tempName;
            createDOM();
        }
    },

    updateTempName(value) {
        this.state.info.tempName = value;
        createDOM();
    },

    updateTempMesBody(value) {
        this.state.message.tempBody = value;
        createDOM();
    },

    addMessage() {
        if (this.state.message.tempBody) {
            this.state.message.lastId++;
            this.state.message.messages.push({id: this.state.message.lastId, body: this.state.message.tempBody});
            this.state.message.tempBody = '';
            createDOM();
        } else {
            alert('Text is None !');
        }

    },
};

export default store;