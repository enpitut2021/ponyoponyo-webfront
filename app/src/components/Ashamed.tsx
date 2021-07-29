//文字が表示されるだけのコンポーネントを作る

// 何を表示するのか？
// What

// What：何のデータを表示するか？

// 1つの文字列を表示する
// Whatのルール付け

import React from "react";

interface OwnProps {
    message: string;
}

type Props = OwnProps;

// どのように表示するのか？
// Where How
export const Ashamed: React.FC<Props> = (props) => {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    );
};
