import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    allQuizzesData: {}[]
}

const initialState: CounterState = {
    allQuizzesData: []
}

const allQuizzesSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        setAllQuizzesData: (state,action) => {
            state.allQuizzesData = [...action.payload]
        },

    }
})

export const { setAllQuizzesData } = allQuizzesSlice.actions

export default allQuizzesSlice.reducer  