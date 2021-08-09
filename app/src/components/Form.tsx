import React, {ChangeEvent} from "react";


interface OwnProps {
    InputValue: string
    deadline_date : string
    deadline_time : string
    onChangeValue(event: React.ChangeEvent<HTMLInputElement>): void;
    onChangeCalenderValue(event:React.ChangeEvent<HTMLInputElement>):void;
    onChangeTimeValue(event:React.ChangeEvent<HTMLInputElement>):void;
    onClick(): void;
}

type Props = OwnProps
export const Form: React.FC<Props> = props => {
    return (
        <div>
            <input
                type="text"
                onChange={props.onChangeValue}
                value={props.InputValue}
            />
            <input
                type="date"
                onChange={props.onChangeCalenderValue}
                value={props.deadline_date}
            />
                <input
                type="time"
                onChange={props.onChangeTimeValue}
                value={props.deadline_time}
            />
            <button
                onClick={props.onClick}
            >登録
            </button>
        </div>
    )
}
