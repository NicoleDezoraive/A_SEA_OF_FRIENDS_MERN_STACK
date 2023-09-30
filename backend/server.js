require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const confirmRotes = require('./routes/confirm')
const eventRotes = require('./routes/event')
const friendRotes = require('./routes/friend')
const userRotes = require('./routes/user')
const volunteerRotes = require('./routes/volunteer')

// express app
const app = express()

const origin = process.env.ORIGIN
app.use(
  cors({
    credentials: true,
    origin
  })
)



// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.listen(process.env.PORT, () => {
  console.log('connected to db & listeneing on port', process.env.PORT)
})

app.get("/", (req,res)=>{
  res.json({mssg: 'welcome'})
})

// routes
app.use('/api/auth', authRoutes)
app.use('/api/confirm', confirmRotes)
app.use('/api/event', eventRotes)
app.use('/api/friend', friendRotes)
app.use('/api/user', userRotes)
app.use('/api/volunteer', volunteerRotes)


// // connect to db
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     // listen for requests
//     app.listen(process.env.PORT, () => {
//       console.log('connected to db & listeneing on port', process.env.PORT)
//     })
//   })
//   .catch((error) => {
//     console.log(error)
//   })
