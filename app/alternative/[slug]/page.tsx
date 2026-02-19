import products from "@/data/products.json";
import alternatives from "@/data/alternatives.json";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const alt = alternatives.find((a: any) => a.slug === slug);

  if (!alt) {
    return <div className="p-10 text-xl">Alternative page not found</div>;
  }

  const replacementProducts = products.filter((p: any) =>
    alt.products.includes(p.slug)
  );

  return (
    <main className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Best Indian alternatives to {alt.foreignBrand}
      </h1>

      <p className="mb-8 text-gray-700 leading-relaxed max-w-3xl">
        Many people in India are searching for alternatives to <b>{alt.foreignBrand}</b>.
        Below are Indian brands offering similar everyday usage while being manufactured
        by Indian companies. Choosing local products helps domestic businesses and reduces
        dependency on foreign brands.
      </p>

      <div className="space-y-6">
        {replacementProducts.map((item: any, i: number) => (
          <a
            key={i}
            href={`/product/${item.slug}`}
            className="flex gap-6 items-center border border-[var(--india-border)] bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="rounded-xl object-contain bg-[var(--india-light)] p-3"
              />
            )}

            <div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-600">{item.brand}</p>
            </div>
          </a>
        ))}
      </div>

    </main>
  );
}
