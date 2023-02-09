import React from 'react'

const Sales = () => {
 const mockSales = 23252;

  return (
    <div className='flex flex-col rounded 2xl border bg-finsho-purple hover:border-slate-300 active:border-slate-200'>
        <div className="p-5 lg:p06 grow w-full flex justify-between items-center">
            <dl>
                <dd className='text-white'>
                    Sales
                </dd>

                <dt className='text-2xl font-bold text-white'>
                    €{mockSales}
                </dt>
            </dl>
        </div>    
    </div>
  )
}

export default Sales