import express from 'express'

// import { env } from './config'

const app = express()

const PORT = 4001
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})
