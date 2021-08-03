import React, {ChangeEvent} from "react";


interface OwnProps {
    InputValue: string

    onChangeValue(event: React.ChangeEvent<HTMLInputElement>): void;

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
                onChange={TODO}
                value={TODO}
            />
            <button
                onClick={props.onClick}
            >登録
            </button>
        </div>
    )
}
