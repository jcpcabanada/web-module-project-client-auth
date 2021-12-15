import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Login from "./components/Login";
import FriendList from "./components/FriendsList";
import AddFriends from "./components/AddFriend";

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <h2>FRIENDS DATABASE</h2>
                    <Link className="links" to="/login" >LOGIN.</Link>
                    <Link className="links" to="/friends" >FRIENDSLIST.</Link>
                    <Link className="links" to="/friends/add" >ADDFRIEND.</Link>
                    <Link className="links" to="/friends" >LOGOUT.</Link>
                </header>
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
        </Router>

    );
}

export default App;
