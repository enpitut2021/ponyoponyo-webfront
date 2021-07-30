import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Todo} from "./components/Todo";
import {Ashamed} from "./components/Ashamed";
import {useDispatch, useSelector} from "react-redux";
import taskSlice, {TaskState} from "./state/Task";
import { Form } from './components/Form';

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
            <h1>タスクが終わらなかった人達の恥ずかしエピソード</h1>
            <Ashamed message={"私は昨日、舌を噛みました"}/>
            <Ashamed message={"私は昨日、足を切りました"}/>
            <Ashamed message={"私は昨日、髪の毛が無くなりました"}/>
        </div>
    );
}

const TodoPage = () => {
    //ストアを呼んでくる

    const dispatch = useDispatch()
    const taskState = useSelector((state: { taskState: TaskState }) => state).taskState

    return (
        <div>
            <h1>
                This is todo page!
            </h1>
            <Form InputValue={taskState.input_value} onChangeValue={(e : React.ChangeEvent<HTMLInputElement>)=>{}} onClick={()=>{}}/>
                        {/*ストアの値と紐付ける*/}
            <Todo task={taskState.task} is_finished={taskState.is_finished} onChange={() => {
                dispatch(taskSlice.actions.notifyChangeTaskState(!taskState.is_finished))
            }}/>
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
