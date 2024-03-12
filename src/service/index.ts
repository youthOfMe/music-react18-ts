import { AxiosHeaders } from "axios"
import XHRequest from "./request"

export const BASE_URL = 'http://coderwhy.dev:8000'
export const TIME_OUT = 10000

const xhRequest = new XHRequest({
  headers: new AxiosHeaders(),
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
