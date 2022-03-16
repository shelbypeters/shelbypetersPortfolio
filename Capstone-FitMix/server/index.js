const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 5000
app.get('/', (req,res) => {
    res.json({message: 'Hello'})
}) 
app.listen(PORT, () => console.log('Listening to PORT 5000'))
