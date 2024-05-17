'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt='PayAny log'
                        className='size-[24px] max-xl:size-14'
                    />
                    <h1 className='sidebar-logo'>PayAny</h1>
                </Link>

                {sidebarLinks.map(({ imgURL, route, label }) => {
                    const isActive = pathname === route || pathname.startsWith(`${route}/`)
                    return(
                        <Link href={route} key={label}
                        className={cn('sidebar-link',{'bg-bank-gradient':isActive})}
                        >
                        <div className='relative size-6'>
                            <Image
                            src={imgURL}
                            alt={label}
                            fill
                            className={cn({'brightness-[3] invert-0':isActive})}
                            />
                        </div>

                        <p className='sidebar-label'>{label}</p>
                        </Link>
                    )
                })}

            </nav>

            <Footer />

        </section>
    )
}

export default Sidebar