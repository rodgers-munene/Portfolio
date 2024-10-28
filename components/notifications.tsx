import React from 'react'

type NotificationsPrompts ={
    successMessage: string,
    errorMessage: string;
}

const Notifications = ( { successMessage, errorMessage }: NotificationsPrompts) => {
  return (
    <div className='fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md mt-5 space-y-2 z-[999]'>
        {successMessage && (
            <div className='bg-green-500 text-white px-4 py-2 rounded shadow-md transition-opacity duration-500'>
                {successMessage}
            </div>
        )}
        {errorMessage && (
            <div className='bg-red-500 text-white px-4 py-2 rounded shadow-md transition-opacity duration-500'>
                {errorMessage}
            </div>
        )}
    </div>
  )
}

export default Notifications