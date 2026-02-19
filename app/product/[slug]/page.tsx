import products from "@/data/products.json";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product = products.find((p: any) => p.slug === slug);

  if (!product) {
    return <div className="p-10 text-xl">Product not found</div>;
  }

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center">

        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={220}
            height={220}
            className="rounded-xl object-contain bg-[var(--india-light)] p-4"
          />
        )}

        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-600">Brand: {product.brand}</p>

          <div className="flex gap-4 mt-4">
            <a
              href={product.amazon}
              target="_blank"
              className="bg-[#ff9900] text-white px-5 py-3 rounded-lg font-semibold"
            >
              Buy on Amazon
            </a>

            <a
              href={product.flipkart}
              target="_blank"
              className="bg-[#2874f0] text-white px-5 py-3 rounded-lg font-semibold"
            >
              Buy on Flipkart
            </a>
          </div>

          {product.proof && (
            <ul className="mt-4 text-sm text-gray-600 space-y-1">
              {product.proof.map((p: string, idx: number) => (
                <li key={idx}>✔ {p}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
