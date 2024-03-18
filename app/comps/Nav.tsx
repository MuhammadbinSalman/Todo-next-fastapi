import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react';


export const Nav = () => {
    return (
        <nav className="overflow-hidden flex justify-between px-28">
            <div className=''>
                <Image height={130} width={130} alt='LOGO' src={"/logo2.png"} />
            </div>
            <Sheet>
                <SheetTrigger color='white'><AlignJustify color='white' /></SheetTrigger>
                <SheetContent color='white' className="bg-[#121212] border-transparent">
                    <ul className='flex flex-col gap-2'>
                        <li><Link className='text-white' href={'/'}>Home</Link></li>
                        <li><Link className='text-white' href={'/todo'}>Todo</Link></li>
                        <li><Link className='text-white' href={'/about'}>About</Link></li>
                        <li><Link className='text-white' href={'/contact'}>Contact</Link></li>
                        <li><Link className='text-white' href={'/login'}>Login</Link></li>
                        <li><Link className='text-white' href={'/register'}>Register</Link></li>
                        <li><Link className='text-white' href={'/profile'}>Profile</Link></li>
                        <li><Link className='text-white' href={'/dashboard'}>Dashboard</Link></li>
                        <li><Link className='text-white' href={'/admin'}>Admin</Link></li>
                        <li><Link className='text-white' href={'/admin/dashboard'}>Admin Dashboard</Link></li>
                        <li><Link className='text-white' href={'/admin/login'}>Admin Login</Link></li>
                        <li><Link className='text-white' href={'/admin/register'}>Admin Register</Link></li>
                        <li><Link className='text-white' href={'/admin/profile'}>Admin Profile</Link></li>
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    )
}
