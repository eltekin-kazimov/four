import React from 'react';


function MessageAdd(props) {

    let spy = React.createRef();

    return (
        <div>
            <div>
                <input ref={spy} value={props.message.tempBody}  onChange={ () => props.updateTempMesBody(spy.current.value) } />
            </div>
            <br />
            <div>
                <button onClick={() => props.addMessage()}> Tesdiq </button>
            </div>
        </div>
    );
}


export default MessageAdd;