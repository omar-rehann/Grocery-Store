"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UserButton } from "@clerk/nextjs"
import { AwardIcon } from "lucide-react"
import Link from "next/link"
 function Header(){
    const [count, setCount] = useState(0);

useEffect(() => {
  getData();
   const interval = setInterval(() => {
    getData();
  }, 1000);

  return () => clearInterval(interval);
}, [count]);
   async function getData() {
  const res = await fetch("http://localhost:1337/api/addtocards");
  const data = await res.json();
  setCount(data.data.length);
  
}

    return(
        <>
        <div className="header flex justify-between bg-[#F8F9FA] shadow-2xl p-2  items-center">
            <div className="image">
                <img src="https://online-grocery-store-web.vercel.app/logo.png" alt="logo" className="w-[150px]" />
                

            </div>
            <div className="login flex justify-between">
                
                
                <div className="buy mt-1 ms-2 me-2">
                    <Link href="/productpage">
                                   <div className="relative inline-block cursor-pointer">
  <i className="fa-solid fa-cart-shopping text-xl"></i>

  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
    {count}
  </span>
</div>
      </Link>
                   
       
                </div>
                <div className="user ms-2">
                    <UserButton/>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Header