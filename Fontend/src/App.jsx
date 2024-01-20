import { useState } from "react"
import axios from 'axios';


function App() {

  let [name,setName]= useState("")
  let [email,setEmail]= useState("")
  let [roll,setRoll]= useState("")
  let [reg,setReg]= useState("")
  let [error,setError]= useState("")
  

  let handleSubmit = async ()=>{
    let data = await axios.post("http://localhost:3000/createtodo",{
      name: name,
      email: email,
      roll: roll,
      reg: reg
    },
    {
      headers:{
        authorization:"Mezan"
      }
    },
    )
    // console.log(data.data.error)
    if(data.data.error){
      setError(data.data.error)

    }else{
      setError(data.data.success)
    }
  }

  return (
    <>
    
      <div className=" grid grid-cols-1 gap-y-4 ml-[500px] mt-44">
        {error && <h1>{error}</h1>}
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" className=" w-1/3 p-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"/>
      <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" className=" w-1/3 p-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"/>
      <input onChange={(e)=>setRoll(e.target.value)} type="text" placeholder="Roll" className=" w-1/3 p-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"/>
      <input onChange={(e)=>setReg(e.target.value)} type="text" placeholder="Reg" className=" w-1/3 p-2 border border-blue-300 rounded-md focus:outline-none focus:border-blue-500"/>
      <button onClick={handleSubmit} className=" w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Send</button>
      </div>
    </>
  )
}

export default App
