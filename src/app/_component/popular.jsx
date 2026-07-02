
import Addtocard from "./addtocard";
async function Popular(){
    const popularitem=await fetch("http://localhost:1337/api/populars?populate=*");
    const result=await popularitem.json();
    const final=result.data;
    return(
        <>
        <div className="poular m-4 p-4 rounded">
                    <div className="container">
  <h4 className="relative inline-block text-2xl font-bold text-green-700
                 after:absolute after:left-0 after:-bottom-2
                 after:h-1 after:w-16 after:rounded-full
                 after:bg-green-700">
   Our Popular Products
  </h4>
</div>
<div className="content  p-4 mt-3 md:grid grid-cols-3 gap-2">
    {final.map((item,index)=>{
        return(
             <div key={item.id} className="transition-transform duration-300  bg-white cursor-pointer  p-[10px] text-center rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] my-[10px]">
       <div className="image flex justify-center mx-auto">
        <img
        src={`http://localhost:1337${item.imgproduct?.[0]?.url}`}

        alt={item.Namechoose}
        className="h-50 w-50 object-contain text-center"
      />
       </div>
       <div className="name mt-2 mb-2 text-start">
                <h5>{item.Nameprouct}</h5>

       </div>
<hr className="border-gray-400" />       <div className="buy flex justify-between items-center p-2 mt-2 mb-2">
        <h5 className="font-bold text-xl">${item.PriceProduct}</h5>
<Addtocard item={item} />

       </div>
    </div>
        )

    })}
   
 
   
</div>
        </div>
        </>
    )
}
export default Popular