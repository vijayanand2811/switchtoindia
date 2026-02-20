import products from "@/data/products.json";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product = products.find((p: any) => p.slug === slug);

  if (!product) {
    return <div className="p-10 text-xl">Product not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto py-10">

  <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

  <p className="text-gray-600 mb-6">
    Brand: <span className="font-medium">{product.brand}</span>
  </p>

  <p className="mb-6 text-gray-700 leading-relaxed">
    This product is an Indian brand alternative available in India.
    Many consumers prefer locally manufactured products for accessibility,
    pricing stability and supporting domestic companies.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 mb-10">
    <a
      href={product.amazon}
      target="_blank"
      className="bg-[#ff9900] text-white px-6 py-3 rounded-lg font-semibold text-center"
    >
      Buy on Amazon
    </a>

    <a
      href={product.flipkart}
      target="_blank"
      className="bg-[#2874f0] text-white px-6 py-3 rounded-lg font-semibold text-center"
    >
      Buy on Flipkart
    </a>
  </div>

  <hr className="my-10" />

  <div>
    <h2 className="text-xl font-semibold mb-3">Looking for alternatives?</h2>

    <a
      href={`/alternative/${product.alternative}`}
      className="text-[var(--india-green)] font-semibold hover:underline"
    >
      View all related alternatives →
    </a>
  </div>

</main>
  );
}
