'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './mode-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CiMenuFries } from 'react-icons/ci';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-40 flex w-full justify-center bg-slate-800 bg-opacity-30">
      <nav className="flex w-[1024px] items-center justify-center p-2 sm:justify-between">
        <h1>T.B.R - Developer</h1>

        <div className="hidden sm:flex sm:gap-10 sm:text-sm">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex gap-8">
                <NavigationMenuLink>
                  <Link
                    href="/"
                    className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <Link
                    href="/about"
                    className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/about' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
                  >
                    Sobre
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <Link
                    href="/work"
                    className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/work' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
                  >
                    Trabalho
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <Link
                    href="/contact"
                    className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/contact' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
                  >
                    Contato
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
        <div className="absolute left-5 top-3 sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CiMenuFries />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/"
                  className={`rounded transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
                >
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/about"
                  className={`rounded transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/about' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
                >
                  Sobre
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/work"
                  className={`rounded transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/work' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
                >
                  Trabalho
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/contact"
                  className={`rounded transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${pathname === '/contact' ? 'bg-slate-100 dark:bg-slate-950' : ''}`}
                >
                  Contato
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
