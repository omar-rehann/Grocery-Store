"use client"
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { useState,useEffect } from "react"
function Addtocard({item}){

  
    const [number,setnumber]=useState(1);
    const data={
        Nameproduct:item.Nameprouct,
        Fixedprice:item.PriceProduct,
        Quantity:number,
        Afterquantity:number*item.PriceProduct,
        imgproduct: item.imgproduct[0].url,
        Categorie:item.Categorey
    }
    const addData = async () => {
  try {
    const response = await fetch("http://localhost:1337/api/addtocards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });
    const result = await response.json();
    toast.success("  Sucsses Add To Card");
  } catch (error) {
    console.error(error);
  }
};
    return(
        <>
        <div className="addtocard">
      <Toaster position="top-center" />
                    {/* add to data in data base  */}
 <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-green-700 p-2 text-white border-0 p-2 rounded cursor-pointer">Add To Card</Button>
        </DialogTrigger>
        <DialogContent className=" w-[38vw] md:w-[90vw] lg:w-[75vw]  rounded-xl bg-gray-50 shadow-xl border-0 p-6">
          <DialogHeader>
            <DialogTitle>Show Deatails Product</DialogTitle>
            <DialogDescription>
              <div className="addtocard">
             <div className="box leading-loose grid  grid-cols-2 gap-2  items-center  ">
                  <div className="image text-center mx-auto">
                    <img src={`http://localhost:1337${item.imgproduct?.[0]?.url}`} className="text-center" alt="photo product " />
                  </div>
                 <div className="text flex flex-col gap-2 p-4">
  <h4 className="text-lg font-semibold mt-2 mb-2">{item.Nameprouct}</h4>
  <p className="text-xl text-gray-600 mt-2 mb-2">{item.About}</p>
    <h4 className=" text-2xl font-bold text-green-700 mt-2 mb-2">${item.PriceProduct}</h4>
  <div className="changeprice flex items-center gap-3">
  <button onClick={()=>setnumber(number - 1)} className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 cursor-pointer text-lg font-bold">
    -
  </button>
  <div className="w-8 text-center font-semibold">{number}</div>
  <button onClick={()=>setnumber(number+1)} className="w-8 h-8 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 cursor-pointer text-lg font-bold">
    +
  </button>
      <h4 className=" text-2xl font-bold text-red-700 mt-2 mb-2">${item.PriceProduct*number}</h4>

</div>
  
</div>

              </div>
        </div>
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>
  <DialogClose asChild>
    <Button
      variant="outline"
      className="bg-red-700 text-white border-0 rounded cursor-pointer"
    >
      Cancel
    </Button>
  </DialogClose>

  <DialogClose asChild>
    <Button
      type="button"
      onClick={addData}
      className="bg-green-700 text-white border-0 rounded cursor-pointer"
    >
      Buy Now
    </Button>
  </DialogClose>
</DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
        </div>
        </>
    )
}
export default Addtocard