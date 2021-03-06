import { configureStore } from "@reduxjs/toolkit"
import {
    userLoginReducer,
    allQuizzesReducer
} from "../redux/index"

export const store = configureStore({
    reducer: {
        userLoginReducer: userLoginReducer,
        allQuizzesReducer: allQuizzesReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch