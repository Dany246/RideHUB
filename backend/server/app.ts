import {Hono} from "hono";
import {logger} from "hono/logger"
import { baseRoute } from "./routes/base-route";

const app = new Hono();

app.use(logger());

const apiRoutes = app.basePath("/api")
                        .route("/base", baseRoute)




export default app
export type AppType = typeof apiRoutes