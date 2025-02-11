import { Hono } from 'hono'
import { prisma } from './database/prisma/prisma'
import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

const app = new Hono()

app.use('*', async (c, next) => {
  c.header('Access-Control-Allow-Origin', '*')
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (c.req.method === 'OPTIONS') {
    return c.text('', 204)
  }

  await next()
})

// 🔹 Regisztráció végpont
app.post('/signup', async (c) => {
  const { firstName, lastName, userName, email, password } = await c.req.json()

  // Ellenőrizzük, hogy az email vagy username már létezik-e
  const existingUser = await prisma.users.findFirst({
    where: { OR: [{ email }, { userName }] }
  })
  if (existingUser) return c.json({ error: 'Email vagy felhasználónév már foglalt' }, 400)

  // Jelszó hash-elése
  const hashedPassword = await hash(password, 10)

  // Új felhasználó mentése
  const user = await prisma.users.create({
    data: { firstName, lastName, userName, email, password: hashedPassword }
  })

  return c.json({ message: 'Sikeres regisztráció', user })
})

// 🔹 Bejelentkezés végpont
app.post('/login', async (c) => {
  const { email, password } = await c.req.json()

  const user = await prisma.users.findUnique({ where: { email } })
  if (!user) return c.json({ error: 'Hibás email vagy jelszó' }, 400)

  const passwordMatch = await compare(password, user.password)
  if (!passwordMatch) return c.json({ error: 'Hibás email vagy jelszó' }, 400)

  const token = sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' })

  return c.json({ message: 'Sikeres bejelentkezés', token })
})

export default app
