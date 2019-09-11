import React from 'react';
import s from './Info.module.css';


function Info(props) {
    let full = '';
    if (props.info.activeFullInfo) {
        full = (
            <li>
                <b> {props.info.name} {props.info.city} {props.info.age} </b>
            </li>
        );
    }

    let spy = React.createRef();

    return (
        <div className={s.infoDiv}>
            <ul>
                <li>
                    <b> Name - {props.info.name}</b> -->
                    <input ref={spy} value={props.info.tempName} onChange={ () => props.updateTempName(spy.current.value) } /> --->
                    {/*<input ref={spy} value={props.message.tempBody}  onChange={() => props.updateTempMesBody(spy.current.value)} />*/}
                    <button onClick={() => props.updateName(props.info.tempName)} > Tesdiq </button>
                </li>
                <li>
                    <b> Age - {props.info.age}</b>
                </li>
                <li>
                    <b> City - {props.info.city}</b>
                </li>
                {full}
            </ul>
            <button onClick={ props.unActive }> OK </button>
        </div>
    );
}


export default Info;