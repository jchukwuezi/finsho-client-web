import React from 'react'

const ShopCheckIns = () => {
  const shopCheckIns = 786;

  return (
    <div>
        <dl>
            <dd className='text-finsho-purple'>
                Shop Check-Ins
            </dd>

            <dt className='text-black font-bold'>
                {shopCheckIns}
            </dt>
        </dl>
    </div>
  )
}

export default ShopCheckIns