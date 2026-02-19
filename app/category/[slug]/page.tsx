import categories from "@/data/categories.json";
import products from "@/data/products.json";
import FeaturedBrand from "@/components/FeaturedBrand";


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const category = categories.find((c: any) => c.slug === slug);

  if (!category) {
    return <div className="p-10 text-xl">Category not found</div>;
  }

  const categoryProducts = products.filter((p: any) =>
    category.products.includes(p.slug)
  );

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <FeaturedBrand />


      <div className="space-y-6">
        {categoryProducts.map((item: any, i: number) => (
          <div key={i} className="border p-5 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 mb-3">Brand: {item.brand}</p>

            <a
              href={`/product/${item.slug}`}
              className="text-green-700 font-semibold"
            >
              View product →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}