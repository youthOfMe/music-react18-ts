import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counter'
import { useSelector, TypedUseSelectorHook } from "react-redux";
type GetStatenType = typeof store.getState
type IRootState = ReturnType<GetStatenType>

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export const useHYSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
