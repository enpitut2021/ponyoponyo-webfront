import {createSlice, PayloadAction} from "@reduxjs/toolkit";

//モデル
export type TaskState = {
    task: string,
    deadline: string,
    is_finished: boolean,
}

//モデルの初期値
export const initialState: TaskState = {
    task: "数学のレポートを滅する",
    is_finished: false,
    deadline: "2021/7/28",
}

//モデルから値の保存場所（State）を作る

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        //アクションを定義する
        //アクションはチェックボックスの値を入れる
        //チェックボックスにチェックが付く・・・true
        //チェックボックスにチェックが付かない・・・false
        notifyChangeTaskState: (state, action: PayloadAction<boolean>) => ({
            ...state, is_finished: action.payload
        })
    }
})

export default taskSlice
