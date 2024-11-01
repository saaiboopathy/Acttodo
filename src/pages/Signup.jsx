import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {

    const navigate = useNavigate()

    const users = props.users
    const setusers = props.setusers

    const [eusername,seteusername]=useState()
    const [epassword,setepassword]=useState()

    const handleUname =(event)=>{
        seteusername(event.target.value)
    }

    const handlePword =(event)=>{
        setepassword(event.target.value)
    }

    const addUser=()=>{
        setusers([...users,{Username:eusername,Password:epassword}])
        navigate('/')
    }



    return (<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md" >
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>Signup Here</p>

            <div className="flex flex-col gap-3 my-2">
                <input type="text" onChange={handleUname} className="w-52 p-1 border border-black bg-transparent  rounded-md" placeholder="Username"></input>

                <input type="text" onChange={handlePword} className="w-52 p-1 border border-black bg-transparent  rounded-md" placeholder="Password"></input>

                <input type="text" className="w-52 p-1 border border-black bg-transparent  rounded-md" placeholder="Confirm Password"></input>

                <button onClick={addUser} className="bg-[#FCA201] p-1 w-24 rounded-md">Signup</button>

                <p>Already have an account ? <Link to={"/"} className="underline">Login</Link></p>
            </div>
        </div>
    </div>)
}

export default Signup