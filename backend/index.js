const e = require('express')
const express = require('express')
const app = express()
const port = 3001

const cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser')
app.use(bodyParser.json())


const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
    // unique:true    
  },
  ticketNumber: Number
},
  { collection: 'users' })

const Users = mongoose.model('users', userSchema);      //

const connect = async () => {
  try {
   mongoose.connect('mongodb://127.0.0.1:27017/winticket', { useNewUrlParser: true, useUnifiedTopology: true });
    // mongoose.set('strictQuery', true);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
connect()


// const winnerTicket = 88
// const tiketLists = [
//   { ticket: 32, backgroundColor: 'red' },
//   { ticket: 66, backgroundColor: 'blue' },
//   { ticket: 88, backgroundColor: 'green' },
//   { ticket: 90, backgroundColor: 'pink' },
//   { ticket: 100, backgroundColor: 'yellow' },
//   { ticket: 77, backgroundColor: 'maroon' }
// ]

app.get('/ticket', async(req, res) => {
  try{

  const data = await Users.find()
  res.json({
    // ticketList: tiketLists,
    // winnerTicket: winnerTicket
    ticketList: data,
  })
}catch(err){
  console.log(err)
}
})

app.get('/tickets/:ticketno', (req, res) => {
  // console.log('working')     // using the params 
  console.log(req.params.ticketno)  
})

// app.post('/register', async(req, res) => {
//   await Users.create(req.body)
// })    const data = await Users.create(req.body)

// or 
app.post('/registerUser', async (req, res) => {
 
  try {
    const data = await Users.create(req.body)
  
    if (data) {
      res.json({
        msg: 'user registered'
      })
    } else {
      res.json({
        msg: 'registration failed'
      })
    }
  } catch (err) {
    console.log(err)
  }

})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


