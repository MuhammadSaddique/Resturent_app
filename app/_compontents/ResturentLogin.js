import { useRouter } from "next/navigation";
import { useState } from "react"

const ResturentLogin = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [error,setError] = useState(false);
  const router = useRouter()

  const handleLogin = async ()=>{
    if(!email || !password){
      setError(true)
      return false
    }else{
      setError(false)
    }
    let response = await fetch("http://localhost:3000/api/resturent",{
      method:'POST',
      body:JSON.stringify({email,password,login:true})
    })
    response = await response.json();
    if(response.success){
      const {result} = response;
      delete result.password;
      localStorage.setItem("resturentUser",JSON.stringify(result));
      router.push("/resturent/dashboard");

      alert("Login successfull")
    }else{
      alert("Login failed")
    }

  }

  return (
    <>
      <h1> Login Compontents</h1>
      <div>
        <div className="input-wrapper">
            <input type="text" placeholder="Enter Email Id" className="input-field" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            {
              error && !email  &&<span className="input-error">Please enter valid Email</span>
            }
        </div>
        <div className="input-wrapper">
            <input type="password" placeholder="Enter Password" className="input-field"
            value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {
              error && !password  &&<span className="input-error">Please enter valid Password</span>
            }
        </div>
        <div className="input-wrapper">
            <button onClick={handleLogin} className="button">Login</button>
        </div>
      </div>

    </>
  )
}

export default ResturentLogin
