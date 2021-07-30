import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type Task = {
    task: string,
    deadline: string,
    is_finished: boolean,

}

//モデル
export type TaskState = {
    tasks:Task[]
    input_value: string,
}

//モデルの初期値
export const initialState: TaskState = {
    tasks:[{
        task: "数学のレポートを滅する",
        is_finished: false,
        deadline: "2021/7/28"
    }],
    input_value:""
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
         }), 
        notifyChangeInputValue: (state, action: PayloadAction<string>) => ({
            ...state, input_value: action.payload
        })
    }
})

export default taskSlice
