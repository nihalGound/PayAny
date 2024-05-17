import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Nihal', lastName: 'Gound', email: 'nsnihalgound123@gmail.com' };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type='greeting'
          title='Welcome'
          user={loggedIn?.firstName || 'Guest'}
          subtext='Access & manage your account and transactions efficiently.'
          />


          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.34}
          />
        </header>
      </div>

      <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.45,name:'Axis Bank'},{currentBalance:234.32,name:"Bank of Barodra"}]}
      />

    </section>
  )
}

export default Home