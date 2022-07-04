import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';

interface IOrderdetail {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
}

function orderdetails() {
  const [orderdetails, setOrderdetails] = useState<Array<IOrderdetail> | null>(null);

  useEffect(() => {
    getOrderdetails();
  }, []);

  const getOrderdetails = () => {
    axios
      .get<Array<IOrderdetail>>('https://localhost:5001/orderdetails/?start=0&length=10')
      .then((response) => {
        console.log(response);
        setOrderdetails(response.data);
      });
  };

  // const getCustomers = (): Array<ICustomers> => {
  //   const customers: Array<ICustomers> = [
  //     {
  //       id: 1,
  //       username: 'eik@gmail.com',
  //       password: '1234',
  //       displayName: 'eikeik',
  //       avatar: 'eikeik',
  //     },
  //   ]
  //   return customers
  // }

  return (
    <>
      <Navbar />
      {/* Table */}
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
                      <th className="th-table">OrderId</th>
                      <th className="th-table">ProductId</th>
                      <th className="th-table">Quantity</th>
                      <th className="th-table">UnitPrice</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-700 ">
                    {orderdetails?.map(function (item, index) {
                      return (
                        <tr key={item.id}>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                            {item.id}
                          </td>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                            {item.orderId}
                          </td>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                            {item.productId}
                          </td>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                            {item.quantity}
                          </td>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                            {item.unitPrice}
                          </td>
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
      {/* Table */}
      {/* Footer */}
      <footer className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          Copyright © 2022 - Version 1.0.15
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
      {/* Footer */}
    </>
  );
}

export default orderdetails;
