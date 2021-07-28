import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Todo} from "./components/Todo";


const Toppage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}
const PublicPage = () => {
    return (
        <div className="name-page">
            <h1>public page</h1>
            <Todo task={"hogehoge"} is_finished={false}/>
            <Todo task={"hogehoge"} is_finished={false}/>
            <Todo task={"hogehoge"} is_finished={false}/>
            <Todo task={"hogehoge"} is_finished={false}/>
            <Todo task={"hogehoge"} is_finished={false}/>
        </div>
    );
}

const TodoPage = () => {
    return (
        <div>
            <h1>
                This is todo page!
            </h1>
        </div>
    )
}

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Toppage}/>
                    <Route path="/public" exact component={PublicPage}/>
                    <Route path="/edit/todo" exact component={TodoPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
