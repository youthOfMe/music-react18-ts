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

export interface PlayList {
  id: number
  name: string
  coverImgId: number
  coverImgUrl: string
  coverImgId_str: string
  adType: number
  userId: number
  createTime: number
  status: number
  opRecommend: boolean
  highQuality: boolean
  newImported: boolean
  updateTime: number
  trackCount: number
  specialType: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: string
  playCount: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: boolean
  description: string
  tags: any[]
  updateFrequency: any
  backgroundCoverId: number
  backgroundCoverUrl: any
  titleImage: number
  titleImageUrl: any
  englishTitle: any
  officialPlaylistType: any
  copied: boolean
  relateResType: any
  subscribers: Subscriber[]
  subscribed: boolean
  creator: Creator
  tracks: Track[]
  videoIds: any
  videos: any
  trackIds: TrackId[]
  bannedTrackIds: any
  mvResourceInfos: any
  shareCount: number
  commentCount: number
  remixVideo: any
  sharedUsers: any
  historySharedUsers: any
  gradeStatus: string
  score: any
  algTags: any
  trialMode: number
  ToplistType: string
}

interface Subscriber {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: any
  experts: any
  djStatus: number
  vipType: number
  remarkName: any
  authenticationTypes: number
  avatarDetail: any
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

interface Creator {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: any
  experts: any
  djStatus: number
  vipType: number
  remarkName: any
  authenticationTypes: number
  avatarDetail: AvatarDetail
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

interface AvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}

interface Track {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: string[]
  pop: number
  st: number
  rt?: string
  fee: number
  v: number
  crbt: any
  cf: string
  al: Al
  dt: number
  h: H
  m: M
  l?: L
  sq?: Sq
  hr?: Hr
  a: any
  cd: string
  no: number
  rtUrl: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData?: OriginSongSimpleData
  tagPicList: any
  resourceState: boolean
  version: number
  songJumpInfo: any
  entertainmentTags: any
  awardTags: any
  single: number
  noCopyrightRcmd: any
  rtype: number
  rurl: any
  mst: number
  cp: number
  mv: number
  publishTime: number
  tns?: string[]
}

interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

interface Al {
  id: number
  name: string
  picUrl: string
  tns: string[]
  pic_str?: string
  pic: number
}

interface H {
  br: number
  fid: number
  size: number
  vd: number
}

interface M {
  br: number
  fid: number
  size: number
  vd: number
}

interface L {
  br: number
  fid: number
  size: number
  vd: number
}

interface Sq {
  br: number
  fid: number
  size: number
  vd: number
}

interface Hr {
  br: number
  fid: number
  size: number
  vd: number
}

interface OriginSongSimpleData {
  songId: number
  name: string
  artists: Artist[]
  albumMeta: AlbumMeta
}

interface Artist {
  id: number
  name: string
}

interface AlbumMeta {
  id: number
  name: string
}

interface TrackId {
  id: number
  v: number
  t: number
  at: number
  alg: any
  uid: number
  rcmdReason: string
  sc: any
  f: any
  sr: any
  lr?: number
  ratio: number
}
