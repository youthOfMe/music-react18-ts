import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommend, getNewAlbum, getPlaylistDetail } from '../service/recommend'
import {
  BannersType,
  HotRecommendsType,
  NewAlbumsType,
  PersonalRecommendsType,
  PlayList,
} from './type'

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

const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk('rankingData', (_, { dispatch }) => {
  // 获取榜单数据
  // 1. 每一个请求进行单独处理
  // for (const id of rankingIds) {
  //   getPlaylistDetail(id).then((res) => {
  //     switch (id) {
  //       case 19723756:
  //         console.log('飙升榜的数据', res)
  //         break
  //       case 3779629:
  //         console.log('新歌榜的数据', res)
  //         break
  //       case 2884035:
  //         console.log('原创榜的数据', res)
  //         break
  //     }
  //   })
  // }
  // 2. 将三个结果都拿到 统一放到一个数组中进行管理
  // 保障一: 获取到所有结果后 进行dispatch操作
  // 保障二: 获取到的结果一定有正确顺序
  const index = 0
  const promises: Promise<any>[] = []
  for (const id of rankingIds) {
    promises.push(getPlaylistDetail(id))
  }

  Promise.all(promises).then((res) => {
    const playlists = res.map((item) => item.playlist)
    dispatch(changeRankingsAction(playlists))
  })
})

interface IRecomendState {
  banners: BannersType
  hotRecommends: HotRecommendsType
  personalRecommends: PersonalRecommendsType
  newAlbums: NewAlbumsType
  rankings: PlayList[]
}

const initialState: IRecomendState = {
  banners: [],
  hotRecommends: [],
  personalRecommends: [],
  newAlbums: [],
  rankings: [],
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
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    },
  },
})

export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changePersonalRecommendsAction,
  changeNewAlbumsAction,
  changeRankingsAction,
} = recommendSlice.actions

export default recommendSlice.reducer
