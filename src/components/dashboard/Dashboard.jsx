import React from 'react'
import Sales from './sales/Sales'
import AvgCartValue from './sales/AvgCartValue'
import Transactions from './sales/Transactions'
import TransactionNoChart from './sales/TransactionNoChart'
import ShopCheckIns from './sales/ShopCheckIns'
import MostPopularItem from './sales/MostPopularItem'

const Dashboard = () => {
  return (
    //page container
    <div className="flex flex-auto flex-col max-w-full pt-20 lg:pt-0">
        <div className='container xl:max-w-7xl mx-auto px-4 py-8 lg:px-8 lg:py-12 space-y-10 lg:space-y-16'>
            <div className="flex flex-col mx-auto w-full min-h-screen lg:pl-64">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                    <Sales />
                    <AvgCartValue />
                    <Transactions />
                </div>  
                
                <div className="mt-10 flex">
                  <div>
                    <TransactionNoChart />
                  </div>
                  <div className="flex-col">
                    <ShopCheckIns />
                    <MostPopularItem />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard