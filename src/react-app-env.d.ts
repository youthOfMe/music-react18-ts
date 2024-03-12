/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
    readonly REACT_APP_TIME_OUT: number
  }
}
