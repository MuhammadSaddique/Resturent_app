'use client'
import Link from "next/link"
import { useRouter,usePathname } from "next/navigation";
import { useEffect, useState } from "react"

const ResturentHeader = ()=>{
    const [details,setDetails] = useState();
    const router = useRouter();
    const pathName = usePathname();

    useEffect(()=>{
        let data = localStorage.getItem("resturentUser");
        if(!data && pathName== ("/resturent/dashboard")){
            router.push("/resturent");
        }else if(data && pathName== ("/resturent")){
            router.push("/resturent/dashboard")
        } else{
            setDetails(JSON.parse(data))
        }
    },[])
    const logout = ()=>{
        localStorage.removeItem("resturentUser");
        router.push("/resturent/dashboard")
    }
return(
    <div className="header-wrapper">
    <div className="logo">
    <img style={{width:100}} src="https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png" />
    </div>
    <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        {
            details && details.name?
            <>
            <li><Link href="/">Profile </Link> </li>
            <li><button onClick={logout}>Logout</button></li>
            </>
            : 
            <li><Link href="/">Login/SignUp</Link></li>
        }
        
       
    </ul>
    </div>
)
}


export default ResturentHeader