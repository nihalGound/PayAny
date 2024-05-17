'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        alt="hamburger"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="bg-white border-none">
                    <Link href={"/"} className="cursor-pointer flex items-center gap-1 px-4 mb-3">
                        <Image
                            src="/icons/logo.svg"
                            alt="PayAny"
                            width={30}
                            height={30}
                        />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">PayAny</h1>
                    </Link>


                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-5 text-white">
                                {sidebarLinks.map(({ imgURL, route, label }) => {
                                    const isActive = pathname === route || pathname.startsWith(`${route}/`)
                                    return (
                                        <SheetClose asChild key={label}>
                                            <Link href={route} key={label}
                                                className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                                            >
                                                <div className='relative size-6'>
                                                    <Image
                                                        src={imgURL}
                                                        alt={label}
                                                        height={20}
                                                        width={20}
                                                        className={cn({ 'brightness-[3] invert-0': isActive })}
                                                    />
                                                </div>

                                                <p className={cn("text-16 font-semibold text-black-2", { "text-white": isActive })}>
                                                    {label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}

                                <h1 className="text-black-1">USER</h1>

                            </nav>
                        </SheetClose>
                        Footer
                    </div>
                </SheetContent>

            </Sheet>
        </section>

    )
}

export default MobileNav