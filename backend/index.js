const express = require('express')
const app = express()
var cors = require('cors')

app.use(express.json())
app.use(cors())

function check(req,res,next){

  let auth = req.headers
  console.log(auth.authorization);

  if(auth.authorization == "Mezan"){
    next()
  }else{
    res.send({"error": "You are no a valid user"})
  }

}

app.post('/createtodo', check, function (req, res) {

  let {name,email,roll,reg} = req.body
  console.log(req.body)
  // res.send(req.body)

  if(!name){
    // console.log("ami send")
    res.send({"error": "Name is required"})
  } if(!email){
    res.send({"error": "Email is required"})
  }
  if(!roll){
    res.send({"error": "Roll is required"})
  }
  if(!reg){
    res.send({"error": "Reg is required"})
  }

  res.send({"success": "Registation successfull"})

})

app.listen(3000, ()=>{
  console.log("port is runing")
})