import Link from "next/link"
function Home(){
    return(
        <>
        <Link href="/homepage">
         <div className="fixed z-10 bottom-5 right-15 bg-red-600 p-4 rounded-full shadow-lg cursor-pointer ">
  <i className="fa-solid fa-house text-white text-xl"></i>
</div>
        </Link>
     
        </>
    )
}
export default Home