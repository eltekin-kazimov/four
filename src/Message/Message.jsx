import React from 'react';
import s from './Message.module.css';
import MessageAdd from "../MessageAdd/MessageAdd";


function Message(props) {
    let arr = props.message.messages.map((item) => {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.body}</td>
            </tr>
        );
    });
    return (
        <div>
            <table className={s.table}>
                <tr>
                    <td>Id</td>
                    <td>Message</td>
                </tr>
                {arr}
            </table>
            <br />
            <MessageAdd message={props.message}
                        updateTempMesBody={props.updateTempMesBody}
                        addMessage={props.addMessage}
            />
        </div>
    );
}


export default Message;