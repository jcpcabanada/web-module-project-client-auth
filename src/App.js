import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Login from "./components/Login";
import FriendList from "./components/FriendsList";
import AddFriends from "./components/AddFriend";

function App() {
    return (
        <div className="App">
            <h2>FRIENDS DATABASE</h2>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/login">
                <Redirect to="/"/>
            </Route>
            <Route exact path="/friends">
                <FriendList/>
            </Route>
            <Route exact path="/friends/add">
                <AddFriends/>
            </Route>
        </div>

    );
}

export default App;
