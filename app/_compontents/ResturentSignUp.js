import { useRouter } from "next/navigation";
import { useState } from "react"

const ResturentSignUp = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [c_password,setc_password] = useState('');
  const [name,setName] = useState('');
  const [city,setCity] = useState('');
  const [address,setAddress] = useState('');
  const [contact,setContact] = useState('');
  const router = useRouter();
  const [error,setError] = useState(false);
  const [passwordError,setPasswordError] = useState(false);

  const handleSignup =async ()=>{
    if(password !== c_password){
      setPasswordError(true);
      return false
    }else{
      setPasswordError(false);
    }
    if(!email || !password || !c_password || !name || !city || !address || !contact){
      setError(true)
      return false
    }else{
      setError(false)
    }
    
    console.log(email,password,c_password,name,city,address,contact);
    let response = await fetch("http://localhost:3000/api/resturent",{
      method:"POST",
      body:JSON.stringify({email,password,name,city,address,contact})
    })
    response = await response.json();
    console.log(response);
    if(response.success){
      console.log(response);
      const {result} = response;
      delete result.password;
      localStorage.setItem("resturentUser",JSON.stringify(result));
      router.push("/resturent/dashboard")
      alert("Resturent Register Successfully")
    }
  }

  return (
    <>
      <h1> SignUp</h1>
      <div>
        <div className="input-wrapper">
            <input type="text" placeholder="Enter Email Id" className="input-field" 
           value={email} onChange={(e)=>setEmail(e.target.value)}/>
           {
              error && !email  &&<span className="input-error">Please enter valid Email</span>
            }
        </div>
        <div className="input-wrapper">
            <input type="password" placeholder="Enter Password" className="input-field"
            value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {
              passwordError && <span className="input-error">Password and Confirm Password not match</span>
            }
            {
              error && !password  &&<span className="input-error">Please enter valid Password</span>
            }
        </div>
        <div className="input-wrapper">
            <input type="password" placeholder="Confirm Password" className="input-field"
            value={c_password} onChange={(e)=>setc_password(e.target.value)}/>
            {
              passwordError && <span className="input-error">Password and Confirm Password not match</span>
            }
            {
              error && !c_password &&<span className="input-error">Please enter valid Confirm Password</span>
            }
        </div>
        <div className="input-wrapper">
            <input type="text" placeholder="Enter Resturent Name" className="input-field"
            value={name} onChange={(e)=>setName(e.target.value)}/>
            {
              error && !name  &&<span className="input-error">Please enter valid Name</span>
            }
        </div>
        <div className="input-wrapper">
            <input type="text" placeholder="Enter City" className="input-field"
            value={city} onChange={(e)=>setCity(e.target.value)}/>
            {
              error && !city  &&<span className="input-error">Please enter valid City</span>
            }
        </div>
        <div className="input-wrapper">
            <input type="text" placeholder="Enter Full Address" className="input-field"
            value={address} onChange={(e)=>setAddress(e.target.value)}/>
            {
              error && !address  &&<span className="input-error">Please enter valid Address</span>
            }
        </div>
        <div className="input-wrapper">
            <input type="Number" placeholder="Enter Contact No." className="input-field"
            value={contact} onChange={(e)=>setContact(e.target.value)}/>
            {
              error && !contact  &&<span className="input-error">Please enter valid Contact</span>
            }
        </div>

        <div className="input-wrapper">
            <button className="button" onClick={handleSignup}>SignUp</button>
        </div>
      </div>
    </>
  )
}

export default ResturentSignUp
