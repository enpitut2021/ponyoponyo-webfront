import React, {ChangeEvent} from "react";


//onChange・・・値が変わったときに実行される関数

interface OwnProps {
    task: string
    is_finished: boolean
    onChange(event: ChangeEvent): void;
}

type Props = OwnProps
export const Todo: React.FC<Props> = props => {
    return (
        <div className="c-cb">
            <input
                id="todo-0"
                type="checkbox"
                //チェックボックスの値が格納される
                defaultChecked={false}
                checked={props.is_finished}
                //値が変わるときに呼ばれる関数
                onChange={event => props.onChange(event)}
            />
            <label className="todo-label" htmlFor="todo-0">{props.task}</label>
        </div>
    );
}
