import React from 'react';
import s from './Info.module.css';
import {createActionUnActive, createActionUpdateName, createActionUpdateTempName} from "../redux/reducerInfo";


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
                    <input ref={spy}
                           value={props.info.tempName}
                           onChange={ () => props.dispatch(createActionUpdateTempName(spy.current.value)) } /> --->
                    <button onClick={() =>  props.dispatch(createActionUpdateName())} > Tesdiq </button>
                </li>
                <li>
                    <b> Age - {props.info.age}</b>
                </li>
                <li>
                    <b> City - {props.info.city}</b>
                </li>
                {full}
            </ul>
            <button onClick={() => props.dispatch(createActionUnActive()) }> OK </button>
        </div>
    );
}


export default Info;