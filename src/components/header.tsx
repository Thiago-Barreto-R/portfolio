'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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
import Image from 'next/image';
import Logo from '../../public/Group 49.png';

export default function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-40 flex w-full justify-center bg-stone-300 dark:bg-stone-900">
      <nav className="flex w-[1024px] items-center justify-center p-2 sm:justify-between">
        <Image src={Logo} alt="Logo" className="h-14 w-14" />

        <div className="hidden sm:flex sm:gap-10 sm:text-sm">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex gap-8">
                <NavigationMenuLink>
                  <Link
                    href="#home"
                    className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${activeSection === 'home' ? 'bg-stone-200 dark:bg-stone-800' : ''}`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <Link
                    href="#about"
                    className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${activeSection === 'about' ? 'bg-stone-200 dark:bg-stone-800' : ''}`}
                  >
                    Sobre mim
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <Link
                    href="#work"
                    className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${activeSection === 'work' ? 'bg-stone-200 dark:bg-stone-800' : ''}`}
                  >
                    Serviços
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <Link
                    href="#contact"
                    className={`rounded p-2 transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${activeSection === 'contact' ? 'bg-stone-200 dark:bg-stone-800' : ''}`}
                  >
                    Contatos
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
                  href="#home"
                  className={`rounded transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${activeSection === 'home' ? 'bg-stone-200 dark:bg-stone-800' : ''}`}
                >
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#about"
                  className={`rounded transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${activeSection === 'about' ? 'bg-stone-200 dark:bg-stone-800' : ''}`}
                >
                  Sobre
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#work"
                  className={`rounded transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${activeSection === 'work' ? 'bg-stone-200 dark:bg-stone-800' : ''}`}
                >
                  Trabalho
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="#contact"
                  className={`rounded transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-950 ${activeSection === 'contact' ? 'bg-stone-200 dark:bg-stone-800' : ''}`}
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
