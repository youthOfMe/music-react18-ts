import { AxiosHeaders } from "axios"
import XHRequest from "./request"
import { BASE_URL, TIME_OUT } from "./config"

const xhRequest = new XHRequest({
  headers: new AxiosHeaders(),
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default xhRequest
