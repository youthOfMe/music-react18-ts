import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'recommend/banners',
  async (args, { dispatch }) => {
    const res = await getBanners()
    console.log(res)
    dispatch(changeBannersAction(res.banners))
  },
)

interface IRecomendState {
  banners: {
    imageUrl: string
    targetId: number
    targetType: number
    titleColor: string
    typeTitle: string
    url: string
    exclusive: boolean
    scm: string
    bannerBizType: string
  }[]
}

const initialState: IRecomendState = {
  banners: [],
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
  },
})

export const { changeBannersAction } = recommendSlice.actions

export default recommendSlice.reducer
