const express = require('express')
const PORT = 3000
const app = express()

app.use(express.static(__dirname))

app.listen(PORT, () => {
    const CEST_OFFSET = 2
    const year_now = new Date().getFullYear()
    const hour_now = new Date().getHours();
    const minutes_now = new Date().getMinutes();
    const month_now = new Date().getMonth() + 1;
    const day_now = new Date().getDate();

    console.log(`Serwer uruchomiono - ${day_now}-${month_now}-${year_now} ${hour_now + CEST_OFFSET}:${minutes_now}`)
    console.log(`Jakub Jankowski`)
    console.log(`Port kontenera: ${PORT}`)
})