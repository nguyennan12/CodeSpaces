// https://redux-toolkit.js.org/tutorials/quick-start
import { configureStore } from '@reduxjs/toolkit'
import { UserReducer } from './user/userSlice'

import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/es/storage/createWebStorage'


const storage = createWebStorage('local')
//cau hinh persist
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user']
}

//combine cac reduer trong project
const reducers = combineReducers({
  user: UserReducer
})

//perssist reducer
const persistedReducer = persistReducer(rootPersistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})