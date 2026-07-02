export const metadata = {
  title: "Grocery Store | Fresh Groceries & Daily Essentials",
  description: "Shop fresh groceries and daily essentials online at Grocery Store. Fast delivery from all branches, great prices, and a wide selection of everyday products and weekly deals.",
  keywords: "grocery store, online groceries, fresh produce, grocery delivery, supermarket deals, daily essentials",
  openGraph: {
    title: "Grocery Store | Fresh Groceries & Daily Essentials",
    description: "Shop fresh groceries and daily essentials with fast delivery and great weekly deals.",
    type: "website",
    locale: "en_US",
  },
}
import Header from "../_component/header"
import Categoreis from "../catgpage/page"
import Footer from "../_component/footer"
import Home from "../_component/home"
function Homepage(){
    return(
        <>
        <Home/>
        <Header/>
       <Categoreis/>
        <Footer/>
        </>
    )
}
export default Homepage