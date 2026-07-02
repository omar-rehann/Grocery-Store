  import Link from "next/link";
  async function  Branches(){
  const data=await fetch("http://localhost:1337/api/branches");
    const result=await data.json();
    const final=result.data   
    return(
        <>
        <div className="branch  m-4 p-4 rounded">
            <div className="container">
  <h4 className="relative inline-block text-2xl font-bold text-green-700
                 after:absolute after:left-0 after:-bottom-2
                 after:h-1 after:w-16 after:rounded-full
                 after:bg-green-700">
    Shop by Category
  </h4>
</div>
<div className="content  p-4 mt-3 md:grid grid-cols-3 gap-2">
    {final.map((item,index)=>{
        return(
            <Link href={`/categores/${item.NameBranch}`}>
                     <div key={item.id} className="transition-transform duration-300 hover:scale-90 bg-white cursor-pointer  p-[10px] text-center rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] my-[10px]">
       <i className={item.iconBranch}></i>
       <h4 className="text-2xl font-bold">{item.NameBranch}</h4>
    </div>
            </Link>
        
        )

    })}
   
 
   
</div>
        </div>
        </>
    )
}
export default Branches