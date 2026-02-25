import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  currentUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  //xu ly dong bo
  reducers: {
    //reducer
  },
  //xu ly bat dong bo
  extraReducers: (builder) => {
    //reducer
  }
})

// Action: nơi chứa các hàm reducer để các component gọi lại băng dispath() lấy data
export const { increment, decrement, incrementByAmount } = userSlice.actions

//Selector: nơi để các component gọi bằng ueSelector lấy dữ liệu đã cập nhất trong state Redux ra sử dụng
export const selectCurrentUser = (state) => {
  return state.userSlice.currentUser
}

export const UserReducer = userSlice.reducer