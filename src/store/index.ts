import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { useSelector, TypedUseSelectorHook, useDispatch, shallowEqual } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

type GetStatenType = typeof store.getState
type IRootState = ReturnType<GetStatenType>
type DispatchType = typeof store.dispatch

export const useHYSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
