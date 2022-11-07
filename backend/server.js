require("dotenv").config()
const express = require("express")
const port = process.env.port || 3000
const app = express()

app.listen(port, () => console.log(`Listening on port ${port}`))