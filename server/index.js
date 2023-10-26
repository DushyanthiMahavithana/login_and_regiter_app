const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const FormModel = require('./models/Form')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/form");

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    FormModel.findOne({email:email})
    .then(user => {
        if(user){
          if(user.password === password){
             res.json("Success")
          }else{
            res.json("Incorrect Password...")
          }
        }else{
            res.json("No Record...")
        }
    })
})

app.post('/register', (req, res) => {
    FormModel.create(req.body)
    .then(form => res.json(form))
    .catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log('Server running successfully...')
})