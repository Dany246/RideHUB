import {type AppType } from "../../../backend/server/app";
import { hc } from "hono/client"

const client = hc<AppType>('/')

 export const api = client.api
