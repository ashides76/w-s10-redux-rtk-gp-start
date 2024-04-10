import { createSlice } from '@reduxjs/toolkit'

let id = 1
const getNextId = () => id++

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: getNextId(), label: 'Laundry', complete: true },
            { id: getNextId(), label: 'Groceries', complete: false },
            { id: getNextId(), label: 'Dishes', complete: false },
        ],
        showCompletedTodos: true,
    },
    reducers: {
        toggleShowCompletedTodos: state => {
            // return { ...state, showCompletedTodos: !state.showCompletedTodos }
            state.showCompletedTodos = !state.showCompletedTodos
        },
        toggleTodo: (state, action) => {
            let todo = state.todos.find(td => td.id === action.payload)
            todo.complete = !todo.complete
        }
    }
})

export const {
    toggleShowCompletedTodos,
    toggleTodo,
} = todosSlice.actions

export default todosSlice.reducer
