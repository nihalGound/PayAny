import React from 'react'
import AnimationCount from './AnimationCount'
import DoughnutChart from './DoghnutChart';

const TotalBalanceBox = ({accounts=[],totalBanks,totalCurrentBalance}:TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart
            accounts={accounts}
            />
        </div>
        <div className='flex flex-col gap-6 font-inter'>
            <h2 className='font-semibold text-lg font-inter text-gray-900'>Bank Accounts : {totalBanks}</h2>
            <div className='flex flex-col gap-4'>
                <p className='total-balance-label'>Total Current Balance    </p>
                <div className='total-balance-amount'>
                    <AnimationCount amount={totalCurrentBalance} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox