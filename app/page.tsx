import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      <h1 className="text-5xl font-bold text-gray-900 leading-tight">
        Switch To India
      </h1>

      <p className="mt-4 text-xl text-gray-600 max-w-xl">
        Find high-quality Indian alternatives to brands you already use.
      </p>

      <SearchBox />

      <div className="mt-8 text-gray-500">
  <p className="mb-3 text-sm">Popular searches</p>

  <div className="flex flex-wrap gap-3 justify-center">
    {["Colgate", "Dove", "Gillette", "Nike"].map((brand) => (
      <a
        key={brand}
        href={`/alternative/${brand.toLowerCase()}-alternative-india`}
        className="px-4 py-2 rounded-full border border-gray-300 hover:border-black hover:text-black transition text-sm"
      >
        {brand}
      </a>
    ))}
  </div>
</div>


    </main>
  );
}
