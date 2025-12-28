'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in-down">
      <div className="container flex h-24 items-center">
        <div className="mr-auto hidden md:flex">
          <Logo />
        </div>

        <div className="md:hidden mr-auto">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover-lift transition-smooth">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <div className="p-4">
                        <Logo />
                    </div>
                    <nav className="flex flex-col gap-4 p-4">
                    {NAV_LINKS.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                              'text-lg font-medium transition-smooth hover:text-primary',
                              pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-end">
            <div className="md:hidden">
              <Logo />
            </div>
            <nav className="hidden md:flex md:gap-8">
                {NAV_LINKS.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                    'text-base font-medium transition-smooth hover:text-primary hover-lift',
                    pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
                    )}
                >
                    {link.label}
                </Link>
                ))}
            </nav>
        </div>
      </div>
    </header>
  );
}
