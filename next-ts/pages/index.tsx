import React from 'react'

function Index() {
  return (
    <>
      <div className='flex min-h-screen items-center justify-center bg-white drop-shadow-xl'>
        <div className='-mt-10 flex flex-col items-center space-y-3 rounded-md border-[1px] border-slate-200 p-10 drop-shadow-xl'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
          </div>
          <h1 className='block pb-1 text-sm font-semibold text-violet-500'>XEON.INC</h1>
          <label className='block pb-1 text-sm font-semibold text-gray-400'>
            Please sign in to your account
          </label>
          <div className='w-full divide-y divide-gray-200 rounded-lg bg-white shadow'>
            <div className='px-5 py-7'>
              <label className='block pb-1 text-sm font-semibold text-gray-600'>E-mail</label>
              <input
                type='text'
                className='mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm '
                placeholder='mail@gmail.com'
                required
              />
              <label className='block pb-1 text-sm font-semibold text-gray-600'>Password</label>
              <input
                type='text'
                className='mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm'
                placeholder='Password'
                required
              />
              <div className='mt-6 flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember_me'
                    type='checkbox'
                    className='border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50'
                  />
                  <label
                    htmlFor='remember_me'
                    className='ml-2 block text-sm leading-5 text-gray-400'
                  >
                    {' '}
                    Remember me{' '}
                  </label>
                </div>
                <a href='#' className='text-sm text-violet-500'>
                  {' '}
                  Forgot your password?{' '}
                </a>
              </div>
              <button
                type='button'
                className='inline-block w-full rounded-lg bg-violet-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm drop-shadow-xl transition duration-200 hover:bg-violet-600 hover:shadow-md focus:bg-violet-600 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'
              >
                <span className='mr-2 inline-block '>Sign in</span>

                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </button>
              <p className='text-center text-gray-400'>
                New on our platform ?{' '}
                <a className='text-violet-500 hover:underline' href='#'>
                  Sign up
                </a>
              </p>
            </div>

            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z'
            />
          </div>
        </div>
      </div>
      <div className='py-5'>
        <div className='grid grid-cols-2 gap-1'>
          <div className='whitespace-nowrap text-center sm:text-left'>
            <button className='mx-5 cursor-pointer rounded-lg px-5 py-4 text-sm font-normal text-gray-500 ring-inset transition duration-200 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='inline-block h-4 w-4 align-text-top'
              ></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
