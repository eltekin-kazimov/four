let store = {

    state: {

        info: {
            name: 'Taken',
            city: 'Baku',
            age: 27,
            activeFullInfo: false,
            tempName: 'Eltekin',
        },

        message : {
            lastId: 1,
            messages: [
                {id: 1, body: 'Salam'},
            ],
        },

    },

    unActive () {
        this.state.info.activeFullInfo = !this.state.info.activeFullInfo;
    },

    updateName () {
        if (this.state.info.name !== this.state.info.tempName && this.state.info.tempName) {
            this.state.info.name = this.state.info.tempName;
            alert ( 'Added name !' );
        }
    },

    addMessage ( text ) {
        if ( text ) {
            this.state.message.lastId++;
            this.state.message.messages.push( {id: this.state.message.lastId, body: text} );
            alert ( `Added message ( ${this.state.message.lastId} ) ` );
        } else {
            alert ( 'Text is None !' );
        }

    }
};

export default store;