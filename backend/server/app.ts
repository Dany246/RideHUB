import { Hono } from 'hono'
import { authRoute } from './routes/auth-route'

const app = new Hono()

app.use('*', async (c, next) => {
  c.header('Access-Control-Allow-Origin', '*')
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (c.req.method === 'OPTIONS') {
    return c.text('', 200)
  }

  await next()
})

const apiRoutes = app.basePath('/api')
                      .route('/auth', authRoute)

export default app
export type ApiRoutes = typeof apiRoutes