import React from 'react';

import Todoitem from "./Todoitem"


function Todolist(props){

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    

    return( <div className="bg-[#BEB4EB] flex-grow p-3 border rounded-md">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        {activityArr.length===0?<p className="font-thin">You haven't added any activity</p>:""}
        {
            activityArr.map(function(item,index){
                return <Todoitem activity={item.activity} id={item.id} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
            })
        }
    </div>)
}

export default Todolist;