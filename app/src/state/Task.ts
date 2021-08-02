import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type Task = {
    task: string,
    deadline: string,
    is_finished: boolean,

}

//モデル
export type TaskState = {
    tasks: Task[]
    input_value: string,
    progress: number
}

//モデルの初期値
export const initialState: TaskState = {
    tasks: [{
        task: "数学のレポートを滅する",
        is_finished: true,
        deadline: "2021/7/28"
    },{
        task: "数学のレポートを滅する",
        is_finished: true,
        deadline: "2021/7/28"
    },{
        task: "数学のレポートを滅する",
        is_finished: true,
        deadline: "2021/7/28"
    },{
        task: "数学のレポートを滅する",
        is_finished: true,
        deadline: "2021/7/28"
    },{
        task: "数学のレポートを滅する",
        is_finished: true,
        deadline: "2021/7/28"
    },],
    input_value: "",
    progress: 0
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
        }),
        notifyAddNewTask: (state, action: PayloadAction<Task>) => ({
            ...state, tasks: [...state.tasks, action.payload]
        }),
        notifyChangeProgress: (state, action: PayloadAction<number>) => ({
            ...state, progress: action.payload
        })

    }
})

export default taskSlice
