import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <span className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">
              WooCommerce + Next.js
            </span>
          </span>
        </Link>
        <a className="text=md font-bold cursor-pointer">Cart</a>
      </div>
    </header>
  );
}
