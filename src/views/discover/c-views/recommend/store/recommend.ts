import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'recommend/banners',
  async (args, { dispatch }) => {
    const res = await getBanners()
    console.log(res)
    dispatch(changeBannersAction(res.banners))
  },
)

export const fetchHotRecommendAction = createAsyncThunk(
  'recommend/hotRecommend',
  async (args, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendsAction(res.result))
  },
)

export const fetchPersonalRecommendAction = createAsyncThunk(
  'recommend/hotRecommend',
  async (args, { dispatch }) => {
    const res = await getHotRecommend(4)
    dispatch(changePersonalRecommendsAction(res.result))
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
  hotRecommends: {
    id: number
    type: number
    name: string
    copywriter: any
    picUrl: string
    canDislike: boolean
    trackNumberUpdateTime: number
    playCount: number
    trackCount: number
    highQuality: boolean
    alg: string
  }[]
  personalRecommends: {
    id: number
    type: number
    name: string
    copywriter: any
    picUrl: string
    canDislike: boolean
    trackNumberUpdateTime: number
    playCount: number
    trackCount: number
    highQuality: boolean
    alg: string
  }[]
}

const initialState: IRecomendState = {
  banners: [],
  hotRecommends: [],
  personalRecommends: [],
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendsAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changePersonalRecommendsAction(state, { payload }) {
      state.personalRecommends = payload
    },
  },
})

export const { changeBannersAction, changeHotRecommendsAction, changePersonalRecommendsAction } =
  recommendSlice.actions

export default recommendSlice.reducer
