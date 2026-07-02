"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]
function ShowProduct(){
  useEffect(()=>{
getallproduct();
deleteitem()
  },[])
  const [data,setdata]=useState([]);
  const getallproduct=()=>{
    fetch("http://localhost:1337/api/addtocards")
    .then(response => response.json())
    .then(data => setdata(data.data))
  }
const deleteitem = (documentId) => {
  fetch(`http://localhost:1337/api/addtocards/${documentId}`, {
    method: "DELETE",
  })
    .then(() => getallproduct())
    .catch((err) => console.log(err));
};
    return(
        <>
       <div className="overflow-x-auto rounded-xl border shadow-md bg-white m-2">
  <Table className="text-center">
    <TableCaption className="py-4 text-gray-500">
      A list of your recent products.
    </TableCaption>

    <TableHeader className="bg-gray-100">
      <TableRow>
        <TableHead className="text-center">Product Name</TableHead>
        <TableHead className="text-center">Image</TableHead>
        <TableHead className="text-center">Fixed Price</TableHead>
        <TableHead className="text-center">Quantity</TableHead>
        <TableHead className="text-center">Category</TableHead>
        <TableHead className="text-center">Total Price</TableHead>
        <TableHead className="text-center">Action</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      {data.map((invoice) => (
        <TableRow
          key={invoice.documentId}
          className="hover:bg-gray-50 transition-colors"
        >
          <TableCell className="font-medium">
            {invoice.Nameproduct}
          </TableCell>

          <TableCell>
            <img
              src={`http://localhost:1337${invoice.imgproduct}`}
              alt={invoice.Nameproduct}
              className="w-20 h-20 object-cover rounded-lg mx-auto "
            />
          </TableCell>

          <TableCell>${invoice.Fixedprice}</TableCell>

          <TableCell>{invoice.Quantity}</TableCell>

          <TableCell>{invoice.Categorie}</TableCell>

          <TableCell className="font-semibold text-green-600">
            ${invoice.Afterquantity}
          </TableCell>

          <TableCell>
            <button
              onClick={() => deleteitem(invoice.documentId)}
              className="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded-lg text-white cursor-pointer"
            >
              Delete
            </button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>
        </>
    )
}
export default ShowProduct