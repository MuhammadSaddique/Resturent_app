"use client"
import ResturentHeader from "@/app/_compontents/ResturentHeader"
import './../style.css'
import AddFoodItem from "@/app/_compontents/AddFoodItem"
import { useState } from "react"
const Dashboard = () => {
  const [addItem,setAddItem] = useState(false);
  return (
    <div>
        <ResturentHeader/>
        <button onClick={()=>setAddItem(true)} >Add Food</button>
        <button onClick={()=>setAddItem(false)} > Dashboard</button>
        {
          addItem?<AddFoodItem/>:  <h1>WellCome to Dashboard</h1>
        }
        
     
    </div>
  )
}

export default Dashboard
