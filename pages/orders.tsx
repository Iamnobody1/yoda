import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'

interface IOrders {
  id: number
  customerId: number
  createDateUTC: Date
}

const Orders = () => {
  const [orders, serOrders] = useState<Array<IOrders> | null>(null)

  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = () => {
    axios.get<Array<IOrders>>('http://localhost:5000/orders?start=0&length=10').then((response) => {
      console.log(response)
      serOrders(response.data)
    })
  }

  return (
    <>
      <Navbar />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 p-6 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                className
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map(function (item, index) {
              return (
                <>
                  <tr
                    key={item.id}
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      Apple MacBook Pro 17
                    </td>
                    <td className="px-6 py-4">Sliver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="#"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Orders
