async function Choose(){
    const chooses=await fetch("http://localhost:1337/api/chooses?populate=*");
    const result=await chooses.json();
    const final=result.data;
    console.log(final)
    return(
        <div className="choose  m-4 p-4 rounded">
                    <div className="container mb-3">
  <h4 className="relative inline-block text-2xl font-bold text-green-700
                 after:absolute after:left-0 after:-bottom-2
                 after:h-1 after:w-16 after:rounded-full
                 after:bg-green-700">
  Why Choose Us
  </h4>
</div>
<div className="content md:grid grid-cols-3 gap-2">
  {final.map((item) => (
  <div
    key={item.id}
    className="cursor-pointer rounded-lg bg-white p-4 text-center shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-90"
  >
    <div className="flex justify-center">
      <img
        src={`http://localhost:1337${item.imgchoose[0].url}`}
        alt={item.Namechoose}
        className="h-20 w-20 object-contain"
      />
    </div>

    <h4 className="mt-4 text-2xl font-bold">
      {item.Namechoose}
    </h4>
  </div>
))}

</div>

        </div>
    )
}
export default Choose