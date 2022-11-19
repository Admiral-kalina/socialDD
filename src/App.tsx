import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import MainPage from "./Components/MainPage/MainPage";
import NavMenu from "./Components/NavMenu/NavMenu"

function App() {
    return (
        <div className="App">
            <NavMenu/>
            <MainPage/>
        </div>
    );
}

export default App;
