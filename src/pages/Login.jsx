
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Login(props) {

    const navigate =useNavigate()
    const users = props.users
   
    const [ruser,setruser]=useState(true)

    const [eusername,seteusername]=useState()
    const [epassword,setepassword]=useState()

    const handleUname =(event)=>{
        seteusername(event.target.value)
    }

    const handlePword =(event)=>{
        setepassword(event.target.value)
    }

    const handleLogin =()=>{ //checks whether the user also exists

        var userfound=false

        console.log(users)
        users.forEach(function(items){
            if(items.Username===eusername && items.Password===epassword){
                console.log("Successfull")
                userfound=true
                navigate("/landing", {state:{user:eusername}})

            }

        })

        if(userfound===false)
            {
            console.log("login failed")
            setruser()
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser?<p>I help you manage your activities when you login</p>:<p className="text-red-500">Please Signup</p>}

                <div className="flex flex-col gap-3 my-2">
                    <input
                        type="text"
                        className="w-52 p-1 border border-black bg-transparent rounded-md"
                        placeholder="Username" onChange={handleUname}
                    />
                    <input
                        type="password"
                        className="w-52 p-1 border border-black bg-transparent rounded-md"
                        placeholder="Password" onChange={handlePword}
                    />
                    <button className="bg-[#8272D8] p-1 w-24 rounded-md" onClick={handleLogin}>Login</button>

                    <p>Don't have an account ? <Link to={"/signup"} className="underline">Signup</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
