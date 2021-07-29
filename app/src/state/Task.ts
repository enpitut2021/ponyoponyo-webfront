import {createSlice, PayloadAction} from "@reduxjs/toolkit";

//モデル
export type TaskState = {
    task: string,
    deadline: string,
    is_finished: boolean,
}

//モデルの初期値
export const initialState: TaskState = {
    task: "",
    is_finished: false,
    deadline: "",
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
