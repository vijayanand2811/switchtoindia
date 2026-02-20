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
            className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center border border-[var(--india-border)] bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            {item.image && (
              <div className="mx-auto md:mx-0">
  <Image
    src={item.image}
    alt={item.name}
    width={120}
    height={120}
    className="rounded-xl object-contain bg-[var(--india-light)] p-3"
  />
</div>
            )}

            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-600">{item.brand}</p>
            </div>
          </a>
        ))}
      </div>
      <hr className="my-12" />

<h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

<div className="space-y-6 max-w-3xl">
  <div className="text-center md:text-left">
    <h3 className="font-semibold text-lg">
      Is {alt.foreignBrand} an Indian brand?
    </h3>
    <p className="text-gray-700">
      {alt.foreignBrand} is a foreign brand. Many consumers look for Indian
      alternatives to support domestic companies and locally manufactured products.
    </p>
  </div>

  <div className="text-center md:text-left">
    <h3 className="font-semibold text-lg">
      Which Indian brand is similar to {alt.foreignBrand}?
    </h3>
    <p className="text-gray-700">
      Several Indian brands offer similar usage. The options listed above are commonly
      available in India and serve the same daily purpose.
    </p>
  </div>

  <div className="text-center md:text-left">
    <h3 className="font-semibold text-lg">
      Why choose Indian alternatives?
    </h3>
    <p className="text-gray-700">
      Choosing Indian brands supports local manufacturing, employment, and economic
      growth while reducing reliance on imported goods.
    </p>
  </div>
</div>


    </main>
  );
}
