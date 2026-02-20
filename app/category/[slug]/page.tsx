import categories from "@/data/categories.json";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const category = categories.find((c: any) => c.slug === slug);

  if (!category) {
    return <div className="p-10 text-xl">Category not found</div>;
  }

  const categoryProducts = products.filter((p: any) =>
  p.category === category.slug
);

  return (
    <main className="max-w-5xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold">{category.name}</h1>

      <p className="text-gray-600 max-w-2xl">
        Explore Indian brands in this category. We verify ownership,
        manufacturing and origin before recommending any product.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {categoryProducts.map((item: any, i: number) => (
          <div
            key={i}
            className="border border-[var(--india-border)] bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex gap-5 items-center">

              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-xl object-contain bg-[var(--india-light)] p-3"
                />
              )}

              <div className="space-y-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>

                <p className="text-sm text-gray-600">{item.tagline}</p>

                <Link
                  href={`/product/${item.slug}`}
                  className="text-[var(--india-green)] font-semibold hover:underline"
                >
                  View details →
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
