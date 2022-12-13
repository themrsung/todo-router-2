const CREATE_TODO = "CREATE_TODO"
const UPDATE_TODO = "UPDATE_TODO"
const REMOVE_TODO = "REMOVE_TODO"

export const createTodo = (payload) => {
    return {
        type: CREATE_TODO,
        payload
    }
}

export const updateTodo = (payload) => {
    return {
        type: UPDATE_TODO,
        payload
    }
}

export const removeTodo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}

const initialState = [
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

const todos = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO: {
            return [
                ...state,
                {
                    key: action.payload.value.key,
                    title: action.payload.value.title,
                    content: action.payload.value.content,
                    isDone: false
                }
            ]
        }
        case UPDATE_TODO: {
            return (state = state.map((state) =>
                state.key === action.payload.value.key ? action.payload : state
            ))
        }
        case REMOVE_TODO: {
            return state.filter(
                (state) => state.key !== action.payload.value.key
            )
        }
        default:
            return state
    }
}

export default todos
