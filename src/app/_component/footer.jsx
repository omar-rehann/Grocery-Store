import Link from "next/link";

function Footer() {
 
  return (
    <footer className="bg-gray-900 text-white pt-12  ">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-10">

          {/* Logo + About */}
          <div>
                <img src="https://online-grocery-store-web.vercel.app/logo.png" alt="logo" className="w-[150px]" />
<p className="text-gray-600 text-sm leading-6">
Shop fresh groceries, fruits, and daily essentials
delivered right to your doorstep. Quality products
at the best prices — always fresh, always fast.
</p>


            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-blue-500 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-sky-400 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

        

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a className="hover:text-white" href="#">FAQ</a></li>
              <li><a className="hover:text-white" href="#">Help Center</a></li>
              <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-white" href="#">Terms of Service</a></li>
              <li><a className="hover:text-white" href="#">Contact Support</a></li>
            </ul>
          </div>
          {/* image */}
          <div className="image grid grid-cols-3 gap-1.5 text-center">
            <img className="w-[120px] rounded cursor-pointer hover:scale-105 transition-transform duration-300" src="https://plus.unsplash.com/premium_photo-1663039978847-63f7484bf701?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww" alt="" />
            <img className="w-[120px] rounded cursor-pointer hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1670684684445-a4504dca0bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img className="w-[120px] rounded cursor-pointer hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img className="w-[120px] rounded cursor-pointer hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1540340061722-9293d5163008?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <img className="w-[120px] rounded cursor-pointer hover:scale-105 transition-transform duration-300" src="https://plus.unsplash.com/premium_photo-1682088356987-33bbbb26d650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for updates, news, and exclusive offers.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-md text-white outline-none"
              />
              <button className="bg-blue-600 px-4 rounded-r-md hover:bg-blue-700">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
          

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

          <ul className="flex gap-4 mb-3 md:mb-0">
            <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white" href="#">Terms</a></li>
            <li><a className="hover:text-white" href="#">Cookies</a></li>
          </ul>

          <p>© 2026 CompanyName. All rights reserved.</p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;