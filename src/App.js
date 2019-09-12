import React from 'react';
import Info from './Info/Info';
import './App.module.css';
import s from './App.module.css';
import {NavLink, Route} from "react-router-dom";
import store from './redux/store';
import Message from "./Message/Message";


function App() {
    return (
        <div>
            <div className={s.menu}>
                <ul>
                    <li className={s.item}>
                        <NavLink to="/info">Info</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/message">Message</NavLink>
                    </li>
                </ul>
            </div>

            <br/>
            <div className={s.appBody}>
                <Route path='/info'
                       render={() => <Info info={store.state.info} dispatch={store.dispatch.bind(store)}/>}
                />
                <Route path='/message'
                       render={ () => <Message
                           message={store.state.message}
                           dispatch={store.dispatch.bind(store)}
                       />}
                />
            </div>

        </div>
    );
}

export default App;
