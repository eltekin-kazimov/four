import React from 'react';
import {createActionAddMessage, createActionUpdateTempMesBody} from "../redux/reducerMessage";


function MessageAdd(props) {

    let spy = React.createRef();

    return (
        <div>
            <div>
                <input ref={spy}
                       value={props.message.tempBody}
                       onChange={ () => props.dispatch(createActionUpdateTempMesBody(spy.current.value)) } />
            </div>
            <br />
            <div>
                <button onClick={() => props.dispatch(createActionAddMessage())}> Tesdiq </button>
            </div>
        </div>
    );
}


export default MessageAdd;