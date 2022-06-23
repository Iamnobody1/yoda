import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'

interface ICustomers {
  id: number
  name: string
}

const customers = () => {
  const [customers, setCustomers] = useState<Array<ICustomers> | null>(null)

  useEffect(() => {
    getCustomers()
  }, [])

  const getCustomers = () => {
    axios
      .get<Array<ICustomers>>('https://localhost:5001/customers/?start=0&length=10')
      .then((response) => {
        console.log(response)
        setCustomers(response.data)
      })
  }

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
      <div className=''></div>
      <Navbar />
      <div className="p-6">
        <div className="bgd-dark">
          <div className="bga-grid"></div>
            <div className="relative overflow-auto rounded-xl">
              <div className="overflow-hidden shadow-sm">
                <table className=" w-full table-auto border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-white p-4 pl-8 text-slate-500 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-400">
                      <th className="th-table">#</th>
                      <th className="th-table">Username</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-slate-700 ">
                    {customers?.map(function (customer, index) {
                      return (
                        <tr key={customer.id}>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                            {customer.id}
                          </td>
                          <td className="border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                            {customer.name}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default customers
