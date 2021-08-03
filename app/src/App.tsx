import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Todo} from "./components/Todo";
import {Ashamed} from "./components/Ashamed";
import {useDispatch, useSelector} from "react-redux";
import taskSlice, {Task, TaskState} from "./state/Task";
import {Form} from './components/Form';
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


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
    const taskState = useSelector((state: { taskState: TaskState }) => state).taskState


    return (
        <div className="name-page">
            <h1>タスクが終わらなかった人達の恥ずかしエピソード</h1>
            {
                taskState.progress < 0.3 ?
                    <div>
                        <Ashamed message={"私は昨日、両国JCTで突っ込みそうになりました"}/>
                        <Ashamed message={"私は昨日、海老名SA～横浜青葉JCT辺りを走っていた記憶がありません"}/>
                    </div> : <div></div>
            }
            <Link to={"/edit/todo"}>Todoリストを編集する</Link>
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
            <Form InputValue={taskState.input_value} 
                  onChangeCalenderValue={(e: React.ChangeEvent<HTMLInputElement>) => {
                      let b = e.target.value
                      dispatch(taskSlice.actions.notifyGetDdl(b))
                      console.log(b)
                }}
                  deadline={
                      taskState.input_deadline_value 
                  }
                  onChangeValue={(e: React.ChangeEvent<HTMLInputElement>) => {
                      let a = e.target.value
                      dispatch(taskSlice.actions.notifyChangeInputValue(a))
                      console.log(a)
                  }} onClick={() => {
                if (taskState.input_value.length !== 0
                ) {
                    const tmpArray = taskState.tasks.filter(task => task.is_finished === true);
                    var taskNum = taskState.tasks.length + 1
                    var progressNum = tmpArray.length
                    var done = progressNum / taskNum

                    let p: Task = {
                        task: taskState.input_value,
                        is_finished: false,
                        deadline: taskState.input_deadline_value,
                        task_id: taskNum
                    }
                    dispatch(taskSlice.actions.notifyChangeProgress(done))
                    dispatch(taskSlice.actions.notifyAddNewTask(p))
                    dispatch(taskSlice.actions.notifyChangeInputValue(""))
                }

            }}/>
            {
                taskState.tasks.map(
                    (value: Task, index: number) => {
                        return (
                            <Todo task={value.task} is_finished={value.is_finished} task_id={value.task_id} deadline={value.deadline}
                                  onChange={() => {
                                      dispatch(taskSlice.actions.notifyChangeTaskState(value.task_id))

                                      console.log(value.task_id)
                                      const tmpArray = taskState.tasks.filter(task => task.is_finished);
                                      const taskNum = taskState.tasks.length;
                                      let progressNum = tmpArray.length;
                                      // if(value.is_finished)progressNum-=1

                                      const done = progressNum / taskNum;
                                      dispatch(taskSlice.actions.notifyChangeProgress(done))
                                  }}/>
                        )
                    }
                )
            }
            <Link to={"/public"}>皆の恥ずかしエピソードを見に行く</Link>
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
