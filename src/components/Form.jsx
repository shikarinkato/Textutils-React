import React from 'react';

export const Form = () => {
    return (
        <div className="form flex justify-center items-center flex-col min-h-max">
            <form action="" className='form1 flex justify-center items-center flex-col min-w-full' >
                < label htmlFor="description" className='text2 m-4 text-2xl' > Give Us Your Feedback</label >
                <textarea name="Description" placeholder='Enter Text Here' id="desc" className=' min-w-max min-h-20 border-solid border-1 border-black text-black' rows="3"></textarea>
            </form >
            <button type='submit' className='bg-blue-600 rounded-xl text-white pt-2 pb-2 pl-4 pr-4  relative left-14'>Submit</button>
        </div>
    )

}

