// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from './components/Navbar';

// interface IProduct {
//   id: number;
//   name: string;
// }

// function product() {
//   const [products, setProducts] = useState<Array<IProduct>>([]);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = () => {
//     axios
//       .get<Array<IProduct>>('http://localhost:5000/products?start=0&length=10')
//       .then((response) => {
//         console.log(response);
//         setProducts(response.data);
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
//           <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 Product name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Color
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Category
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Price
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 <span className="sr-only">Edit</span>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(function (item, index) {
//               return (
//                 <tr
//                   key={item.id}
//                   className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
//                 >
//                   <th
//                     scope="row"
//                     className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
//                   >
//                     {item.id}
//                   </th>
//                   <td className="px-6 py-4">{item.name}</td>
//                   <td className="px-6 py-4 text-right">
//                     <a
//                       href="#"
//                       className="font-medium text-blue-600 hover:underline dark:text-blue-500"
//                     >
//                       Edit
//                     </a>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default product;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

interface IProducts {
  id: number;
  name: string;
}

function product() {
  const [products, setProducts] = useState<Array<IProducts> | null>(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get<Array<IProducts>>('https://localhost:5001/products/?start=0&length=10')
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      });
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="bgd-dark">
          <div className="bga-grid"></div>
          <div>
            <div className="relative overflow-auto rounded-xl">
              <div className="overflow-hidden shadow-sm">
                <table className=" w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-white p-4 pl-8 text-slate-500 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-400">
                      <th className="th-table">Id</th>
                      <th className="th-table">Name</th>
                      <th className="th-table">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-700 ">
                    {products?.map(function (product, index) {
                      return (
                        <tr key={product.id}>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                            {product.id}
                          </td>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                            {product.name}
                          </td>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400"></td>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400"></td>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400"></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default product;
