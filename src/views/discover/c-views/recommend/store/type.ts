interface BannerType {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

export type BannersType = BannerType[]

interface HotRecommendType {
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
}

export type HotRecommendsType = HotRecommendType[]

interface PersonalRecommendType {
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
}

export type PersonalRecommendsType = PersonalRecommendType[]

interface ArtistType {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
  picId_str: string
  transNames: string[]
  img1v1Id_str: string
}

interface Artist2Type {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: any[]
  trans: string
  musicSize: number
  topicPerson: number
  img1v1Id_str: string
}

interface NewAlbumType {
  name: string
  id: number
  type: string
  size: number
  picId: number
  blurPicUrl: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company: string
  briefDesc: string
  artist: ArtistType
  songs: any
  alias: any[]
  status: number
  copyrightId: number
  commentThreadId: string
  artists: Artist2Type[]
  paid: boolean
  onSale: boolean
  picId_str: string
}

export type NewAlbumsType = NewAlbumType[]
