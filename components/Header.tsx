"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-[var(--india-light)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[var(--india-green)]">
          Switch To India
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-[var(--india-green)] font-medium">
          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/advertise">For Brands</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-lg bg-white border-t">
          <Link href="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link href="/categories" onClick={() => setOpen(false)} className="block">Categories</Link>
          <Link href="/advertise" onClick={() => setOpen(false)} className="block">For Brands</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">About</Link>
        </div>
      )}
    </header>
  );
}