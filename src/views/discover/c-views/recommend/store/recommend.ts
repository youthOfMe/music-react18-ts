import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum } from '../service/recommend'
import { BannersType, HotRecommendsType, NewAlbumsType, PersonalRecommendsType } from './type'

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

export const fetchNewAlbumsAction = createAsyncThunk('newAlbum', async (arg, { dispatch }) => {
  const res = await getNewAlbum()
  dispatch(changeNewAlbumsAction(res.albums))
})

interface IRecomendState {
  banners: BannersType
  hotRecommends: HotRecommendsType
  personalRecommends: PersonalRecommendsType
  newAlbums: NewAlbumsType
}

const initialState: IRecomendState = {
  banners: [],
  hotRecommends: [],
  personalRecommends: [],
  newAlbums: [],
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
    changeNewAlbumsAction(state, { payload }) {
      state.newAlbums = payload
    },
  },
})

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changePersonalRecommendsAction,
  changeNewAlbumsAction,
} = recommendSlice.actions

export default recommendSlice.reducer
