import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    isUserLogin: boolean
}
  
// Define the initial state using that type
const initialState: CounterState = {
    isUserLogin: false
}

const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        setUserAsLoggedIn: state => {
            state.isUserLogin = true
        },

        setUserAsLoggedOut: state => {
            state.isUserLogin = false
        }
    }
})

export const { setUserAsLoggedIn, setUserAsLoggedOut } = userLoginSlice.actions

export default userLoginSlice.reducer  