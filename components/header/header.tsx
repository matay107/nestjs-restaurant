'use client'

import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/logo.png'
import classes from './header.module.css'
import { usePathname } from 'next/navigation';

export default function Header()
{

    const path = usePathname();

    return <header className={classes.header}>
    <Link href="/" className={classes.logo}>
        <Image src={logo} alt="pos project" />
        NextLever food
    </Link>
    <nav className={classes.nav}>
    <ul>
        <li>
            <Link href="/meals" className={path.startsWith('/meals')?classes.active:undefined}>meals</Link>
        </li>
        <li>
            <Link href="/community" className={path.startsWith('/community')?classes.active:undefined}>community</Link>
        </li>
    </ul>
    </nav>
    
    </header>
}