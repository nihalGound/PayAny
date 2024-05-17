'use client'

import CountUp from 'react-countup';

const AnimationCount = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp
        end={amount}
        duration={1}
        decimals={2}
        decimal='.'
        separator=','
        prefix='₹'        
        />
    </div>
  )
}

export default AnimationCount