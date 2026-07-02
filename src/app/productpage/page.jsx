export const metadata = {
  title: "Product Details | Grocery Store",
  description: "Browse product details, prices, and availability at Grocery Store. Fresh quality groceries with fast delivery to your door.",
  keywords: "grocery product, product details, fresh groceries, online shopping",
  openGraph: {
    title: "Product Details | Grocery Store",
    description: "Browse product details, prices, and availability with fast delivery.",
    type: "website",
    locale: "en_US",
  },
}
import Header from "../_component/header"
import ShowProduct from "../_component/showproduct"
import Footer from "../_component/footer"
import Home from "../_component/home"
import Choose from "../_component/choose"

function ProductPage(){
    return(
        <>
        <Home/>
        <Header/>
        <ShowProduct/>
        <Choose/>
        <Footer/>
        </>
    )
}
export default ProductPage