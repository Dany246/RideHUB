import { Hono } from "hono"
import { prisma } from "../database/prisma/prisma"
import { compare, hash } from "bcryptjs"
import { sign } from "jsonwebtoken"

export const authRoute = new Hono()
    // 🔹 Regisztráció végpont
    .post('/signup', async (c) => {
        const { firstName, lastName, userName, email, password } = await c.req.json()

        // Ellenőrizzük, hogy az email vagy username már létezik-e
        const existingUser = await prisma.users.findFirst({
            where: { OR: [{ email }, { userName }] }
        })
        if (existingUser) return c.json({ error: 'Email vagy felhasználónév már foglalt' }, 400)
    
        // Jelszó hash-elése
        const hashedPassword = await hash(password, 10)
    
        // Új felhasználó mentése
        await prisma.users.create({
            data: { firstName, lastName, userName, email, password: hashedPassword }
        })
    
        return c.json({ message: 'Sikeres regisztráció' })
    })
    // 🔹 Bejelentkezés végpont
    .post('/login', async (c) => {
        const { email, password } = await c.req.json()
    
        const user = await prisma.users.findUnique({ where: { email } })
        if (!user) return c.json({ error: 'Hibás email vagy jelszó' }, 400)
    
        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) return c.json({ error: 'Hibás email vagy jelszó' }, 400)
    
        const token = sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' })
    
        return c.json({ message: 'Sikeres bejelentkezés', token })
    })
    // 🔹 Profil adatok végpont
