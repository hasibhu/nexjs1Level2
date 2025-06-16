import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-around items-center bg-amber-300 p-7 text-xl font-bold'>

            <h1>MySite</h1>
            <div className='flex gap-6' >
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/counter">Counter</Link>
                <Link href="/register">Register</Link>
                <Link href="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
