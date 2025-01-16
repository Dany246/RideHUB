import app from "./server/app"

Bun.serve({
    port: process.env.PORT || 3000, //Nem muszáj, megadni alapból odaad 3000es portot a BUN.
    fetch: app.fetch
})

console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`)