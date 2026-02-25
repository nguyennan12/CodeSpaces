// https://redux-toolkit.js.org/tutorials/quick-start
import { configureStore } from '@reduxjs/toolkit'
import { UserReducer } from './user/userSlice'

export const store = configureStore({
  reducer: {
    user: UserReducer
  }
})