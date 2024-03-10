import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counter'
type GetStatenType = typeof store.getState
export type IRootState = ReturnType<GetStatenType>

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store
