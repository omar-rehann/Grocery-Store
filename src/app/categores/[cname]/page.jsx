import Header from "../../_component/header"
import Footer from "../../_component/footer"
import Branches from "@/app/_component/branches"
import Home from "../../_component/home"
import Addtocard from "@/app/_component/addtocard"
async function  categores({params}){
    const {cname} =  await params;
  const getitem = await fetch(`http://localhost:1337/api/${cname.toLowerCase()}?populate=*`);
const result = await getitem.json();
const final = result.data  || [];

    return(
        <>
        <Header/>
        <Home/>
        <div className="continer bg-green-700 p-3  text-center">
            <div className="font-bold text-2xl text-white">{cname}</div>
           </div>
        <Branches/>
        <div className="categories  p-4 mt-3 md:grid grid-cols-3  gap-2">
          {
  final.length > 0 ? (
    final.map((item, index) => {
      return (
        <div
          key={item.id}
          className="transition-transform duration-300 bg-white cursor-pointer p-[10px] text-center rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] my-[10px]"
        >
          <div className="image flex justify-center mx-auto">
            <img
              src={item.imgproduct}
              alt={item.Nameproduct}
              className="h-50 w-[100%] rounded text-center"
            />
          </div>

          <div className="name mt-2 mb-2 text-start">
            <h5>{item.Nameproduct}</h5>
          </div>

          <hr className="border-gray-400" />

          <div className="buy flex justify-between items-center p-2 mt-2 mb-2">
            <h5 className="font-bold text-xl">${item.priceproduct}</h5>
            <Addtocard item={item} />
          </div>
        </div>
      );
    })
  ) : (
   <div className="message w-full w-full p-2 rounded text-center">
    <h4 className="text-center">Not Data</h4>
   </div>
  )
}
           
        </div>
        <Footer/>
        </>
    )
}
export default categores