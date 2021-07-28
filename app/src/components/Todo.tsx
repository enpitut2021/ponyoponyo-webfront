interface OwnProps {
    task: string
    is_finished: boolean
}

type Props = OwnProps
export const Todo: React.FC<Props> = props => {
    return (
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={false}/>
                <label className="todo-label" htmlFor="todo-0">
                    {props.task}
                </label>
            </div>
        </li>
    );
}
