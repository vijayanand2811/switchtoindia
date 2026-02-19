import Link from "next/link";

export default function Header() {
  return (
    <header
      className="border-b"
      style={{
        background: "var(--india-light)",
        borderColor: "var(--india-border)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          className="text-2xl font-bold"
          style={{ color: "var(--india-green)" }}
        >
          Switch To India
        </Link>

        <nav className="flex gap-6 font-medium">
  <Link href="/" style={{ color: "var(--india-green)" }}>
    Home
  </Link>

  <Link href="/category/toothpaste" style={{ color: "var(--india-green)" }}>
    Categories
  </Link>

  <Link href="/advertise" style={{ color: "var(--india-green)" }}>
    For Brands
  </Link>

  <Link href="/about" style={{ color: "var(--india-green)" }}>
    About
  </Link>
</nav>

      </div>
    </header>
  );
}
