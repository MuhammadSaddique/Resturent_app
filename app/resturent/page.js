"use client"
import { useState } from "react"
import ResturentLogin from "../_compontents/ResturentLogin"
import ResturentSignUp from "../_compontents/ResturentSignUp"
import ResturentHeader from "../_compontents/ResturentHeader"
import "./style.css"
import Footer from "../_compontents/Footer"

const Resturent = () => {
    const [login,setLogin] = useState(true);
  return (
    <>
    <div className="container">
      <ResturentHeader/>
      <h1>Resturent Login/SignUp Page</h1>
      {
        login? <ResturentLogin/>:<ResturentSignUp/>
      }
     
      
      <button className="button-link" onClick={()=>setLogin(!login)}>{
        login?"Do not have Account? SignUp":"Already have Account? Login"
        }
        </button>
        </div>
        <Footer/>
    </>
  )
}

export default Resturent
