"use client";
import { SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function LoginPage() {
   const { isSignedIn } = useUser();
    const router = useRouter();
    useEffect(() => {
        if (isSignedIn) {
            router.push("/homepage");
        }
    }, [isSignedIn, router]);
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side */}
      <div className=" h-[100vh]">
        <img
        src="https://images.unsplash.com/photo-1628102491629-778571d893a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww"
          alt="Login"
          className="w-full h-[100vh] object-cover"
        />
      </div>

      {/* Right Side */}
     <div className="w-full flex flex-col items-center justify-center">
  <div className="w-full  m-2 border-s-red-700 p-8  rounded-xl shadow-lg">
    <h1 className="text-3xl font-bold text-center mb-2">
      Welcome To Grocery Store
    </h1>

    <div className="text text-center text-gray-600 mt-4 leading-7">
       <p>
    Discover fresh groceries, daily essentials, and quality products at the best prices.
  </p>

  <p>
    Shop by category, explore special offers, and enjoy a fast and convenient online shopping experience with home delivery.
  </p>
    </div>

    <div className="mt-6 text-center">
      <SignInButton mode="modal">
        <button className="bg-green-800 mt-5 text-white px-6 py-3 rounded-lg hover:bg-green-700 cursor-pointer">
          Sign In
        </button>
      </SignInButton>
    </div>
  </div>
</div>
    </div>
  );
}