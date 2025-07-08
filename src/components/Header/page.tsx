'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Velocity', href: '/velocity' },
  { label: 'Repeating', href: '/repeating' },
  { label: 'Delay', href: '/delay' },
  { label: 'Custom', href: '/custom' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-gray-900 text-white p-4 shadow-md">
      <nav className="flex gap-6 justify-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:underline transition-colors ${
              pathname === item.href ? 'font-bold text-yellow-400' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
