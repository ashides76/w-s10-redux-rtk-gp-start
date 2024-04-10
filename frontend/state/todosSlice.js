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
    }
})

export default todosSlice.reducer
