import { configureStore } from "@reduxjs/toolkit"

function todosReducer(
    state = {
        value: [
            {
                key: 0,
                title: "정밀사격",
                content: "10m에서 1MOA 명중률 달성하기",
                isDone: false
            },

            {
                key: 1,
                title: "연속사격",
                content: "10m에서 탄창 10개 비우기",
                isDone: true
            }
        ]
    },
    action
) {
    switch (action.type) {
        case "todos/added":
            return { value: [...state.value, action.payload] }
        case "todos/removed":
            return {
                value: state.value.filter((todo) => todo !== action.payload)
            }
        // case "todos/completed":
        //     const newCompletedTodo = action.payload
        //     newCompletedTodo.isDone = true
        //     return {
        //         value: [
        //             ...state.value.filter((todo) => todo !== action.payload),
        //             newCompletedTodo
        //         ]
        //     }
        // case "todos/unompleted":
        //     const newUncompletedTodo = action.payload
        //     newUncompletedTodo.isDone = false
        //     return {
        //         value: [
        //             ...state.value.filter((todo) => todo !== action.payload),
        //             newUncompletedTodo
        //         ]
        //     }
        default:
            return state
    }
}

function todosIdReducer(state = { value: 2 }, action) {
    switch (action.type) {
        case "todosId/incremented":
            return { value: state.value + 1 }
        default:
            return state
    }
}

let todosStore = configureStore({ reducer: todosReducer })
let todosIdStore = configureStore({ reducer: todosIdReducer })

export { todosStore, todosIdStore }
