import { useState } from "react"

function Addtodoform(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newActivity,setnewActivity]=useState("")

    const handleChange=(event)=>{
        setnewActivity(event.target.value)
    }

    const handleAdd=()=>{
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setnewActivity("")

    }

    return (<div className="flex flex-col gap-3 bg-transparent p-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>



        <div className="flex gap-3">
            <input value={newActivity} onChange={handleChange} className="border border-black rounded-md p-1" placeholder="New Activity"></input>
            <button onClick={handleAdd} className="border border-black rounded-md p-1 bg-black text-white">Add</button>
        </div>
    </div>)
}

export default Addtodoform