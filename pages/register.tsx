import React from 'react'
import axios, { AxiosError } from 'axios'

const Login = () => {
  const displaynameRef = React.createRef<HTMLInputElement>()
  const usernameRef = React.createRef<HTMLInputElement>()
  const passwordRef = React.createRef<HTMLInputElement>()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    console.log(1)
    axios
      .post<string>('https://localhost:5001/authentication', {
        displayname: 'samplename',
        username: 'admin',
        password: '1234',
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error: AxiosError) => {
        if (error.response?.status == 401) {
          console.log('password wrong')
        } else {
          console.log('Error 500')
        }
        console.log(error)
      })
  }

  return (
    <>
      <div className='  bg-white-900 flex h-screen items-center justify-center self-center drop-shadow-2xl'>
        <div className=' box-content flex w-96 items-center justify-center rounded-3xl bg-white py-12 px-4 sm:px-6 lg:px-8 '>
          <div className='w-full max-w-md space-y-8'>
            <div>
              <img
                className='mx-auto h-12 w-auto'
                src='https://seeklogo.com/images/T/the-sandbox-logo-5226CB718C-seeklogo.com.png'
                alt='Workflow'
              />
              <h2 className='text-l mt-6 text-center text-slate-400'>
                Enter your personal details to create account
              </h2>
            </div>
            <form className='mt-8 space-y-6' action='#' method='POST'>
              <label className='block'>
                <span className='block text-sm font-medium text-slate-700'>Display Name</span>
                <input
                  ref={displaynameRef}
                  type='email'
                  placeholder='Sample'
                  className=' mt-1 block w-full rounded-full border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 placeholder-slate-400
      shadow-sm invalid:border-red-500 invalid:text-pinred-600 focus:border-sky-500
      focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500
      focus:invalid:ring-red-500 disabled:border-slate-200
      disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none'
                />
              </label>
              <label className='block'>
                <span className='block text-sm font-medium text-slate-700'>Email</span>
                <input
                  ref={usernameRef}
                  type='email'
                  placeholder='you@example.com'
                  className=' mt-1 block w-full rounded-full border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 placeholder-slate-400
      shadow-sm invalid:border-pinred-500 invalid:text-pinred-600 focus:border-sky-500
      focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500
      focus:invalid:ring-red-500 disabled:border-slate-200
      disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none'
                />
              </label>
              <label className='block'>
                <span className='block text-sm font-medium text-slate-700'>Password</span>
                <input
                  ref={passwordRef}
                  type='password'
                  placeholder='Enter your password'
                  className=' mt-1 block w-full rounded-full border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 placeholder-slate-400
      shadow-sm invalid:border-red-500 invalid:text-red-600 focus:border-sky-500
      focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500
      focus:invalid:ring-red-500 disabled:border-slate-200
      disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none'
                />
              </label>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-sm text-slate-400'
                  >
                    {' '}
                    I agree to <span className=' text-indigo-600'> privacy policy </span>
                    {' & '}
                    <span className=' text-indigo-600'> terms </span>
                  </label>
                </div>
              </div>

              <div>
                <button
                  onClick={handleClick}
                  type='submit'
                  className='group relative flex w-full justify-center rounded-full border border-transparent bg-indigo-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <path
                      fillRule='evenodd'
                      d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                      clipRule='evenodd'
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
            <div className='text-center'>
              <span className='text-sm'>
                <a href='#' className='font-regular text-slate-400 hover:text-indigo-500'>
                  {' '}
                  Already have an account?{' '}
                </a>
              </span>{' '}
              <span className='text-sm'>
                <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                  {' '}
                  Sign in instead{' '}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
