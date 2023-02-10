import React from 'react'

const MostPopularItem = () => {
  const popularItem = 'Avamore Milk'
  return (
    <div>
        <dl>
            <dd className='text-finsho-purple'>
                Most Popular Item
            </dd>

            <dt className='text-black font-bold'>
                {popularItem}
            </dt>
        </dl>
    </div>
  )
}

export default MostPopularItem