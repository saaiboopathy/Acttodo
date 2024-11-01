import Addtodoform from "./addTodoform"
import Todolist from "./todolist"
import { useState } from "react"


function Todocomp() {

    const [activityArr,setActivityArr]=useState([{id:1,activity:"Walk"},{id:2,activity:"Swim"}])


    return (<div>

        <div className="flex gap-5 flex-wrap">
            <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr}/>
            <Todolist activityArr={activityArr} setActivityArr={setActivityArr} />           
        </div>
    </div>)
}

export default Todocomp;