import {createDOM} from "./../index";


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