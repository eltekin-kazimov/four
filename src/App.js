import React from 'react';
import Info from './Info/Info';
import './App.module.css';
import s from './App.module.css';
import {NavLink} from "react-router-dom";
import store from './store';


function App(props) {
    return (
        <div>
            <div className={s.menu}>
                <ul>
                    <li className={s.item}>
                        <NavLink to="/info">Info</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/info">Message</NavLink>
                    </li>
                </ul>
            </div>

            <br/>
            <div className={s.appBody}>
                <Info info={props.store.state.info}
                      unActive={ store.unActive.bind(store)}
                      updateName={store.updateName.bind(store)}
                      updateTempName={store.updateTempName.bind(store)}
                />
            </div>

        </div>
    );
}

export default App;
