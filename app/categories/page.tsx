import categories from "@/data/categories.json";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-3">Browse Indian Products by Category</h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        Explore verified Indian brands organised by everyday categories.
        Each category lists Indian alternatives to commonly used foreign brands.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {categories.map((cat: any) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="border border-[var(--india-border)] rounded-2xl p-6 bg-white hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>

            <p className="text-gray-500 text-sm">
              View Indian alternatives in this category →
            </p>
          </Link>
        ))}

      </div>

    </main>
  );
}