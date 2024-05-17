import { countTransactionCategories } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCards from './BankCard'
import BankCards1 from './BankCard1'

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
    return (
        <aside className='right-sidebar'>
            <section className='flex flex-col'>
                <div className='profile-banner' />
                <div className='profile'>
                    <div className='profile-img'>
                        <span className='text-5xl text-blue-500 font-bold uppercase'>{user.firstName[0]}</span>
                    </div>
                    <div className='profile-details'>
                        <div className='profile-name'>{user.firstName}</div>
                        <p className='profile-email'>{user.email}</p>
                    </div>
                </div>

            </section>

            <section className='banks'>
                <div className='flex w-full justify-between items-center'>
                    <div className='header-2'>My Banks</div>
                    <Link href={"/"} className='flex justify-between items-center'>
                        <Image
                            src="/icons/plus.svg"
                            alt='plus'
                            width={20}
                            height={20}
                        />
                        <h2 className="text-14 font-semibold text-gray-600">
                            Add Bank
                        </h2>
                    </Link>
                </div>

                {banks?.length > 0 && (
                    <div className='flex flex-1 flex-col items-center justify-center py-4'>
                        <div className='relative z-10'>
                            <BankCards
                                key={banks[0].$id}
                                account={banks[0]}
                                userName={`${user.firstName} ${user.lastName}`}
                                showBalance={false}
                            />
                            {banks[1] && (
                                <div className='absolute z-0 -left-4 -top-10 '>
                                    <BankCards1
                                        key={banks[1].$id}
                                        account={banks[1]}
                                        userName={`${user.firstName} ${user.lastName}`}
                                        showBalance={false}
                                    />
                                </div>
                            )}
                        </div>

                    </div>
                )}
            </section>

        </aside>
    )
}

export default RightSideBar