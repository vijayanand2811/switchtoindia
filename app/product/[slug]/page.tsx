import products from "@/data/products.json";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const product = products.find((p: any) => p.slug === slug);

  if (!product) {
    return <div className="p-10 text-xl">Product not found</div>;
  }

  return (
    <main className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg text-gray-600 mb-6">Brand: {product.brand}</p>

      <div className="flex gap-4">
        <a
          href={product.amazon}
          target="_blank"
          className="bg-yellow-400 px-5 py-3 rounded-lg font-semibold"
        >
          Buy on Amazon
        </a>

        <a
          href={product.flipkart}
          target="_blank"
          className="bg-blue-500 text-white px-5 py-3 rounded-lg font-semibold"
        >
          Buy on Flipkart
        </a>
      </div>
    </main>
  );
}