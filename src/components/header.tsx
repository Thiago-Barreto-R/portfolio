'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './mode-toggle';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-40 flex w-full justify-center bg-slate-800 bg-opacity-30">
      <nav className="flex w-[1024px] items-center justify-between py-2">
        <h1>T.B.R - Developer</h1>

        <div className="flex gap-10 text-sm">
          <Link
            href="/"
            className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/about' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
          >
            Sobre
          </Link>
          <Link
            href="/work"
            className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/work' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
          >
            Trabalho
          </Link>
          <Link
            href="/contact"
            className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/contact' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
          >
            Contato
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
