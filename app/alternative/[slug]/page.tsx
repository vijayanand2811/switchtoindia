import Link from "next/link";
import Image from "next/image";
import alternatives from "@/data/alternatives.json";
import products from "@/data/products.json";
import comparison from "@/data/comparisons/colgate.json"; // <-- NEW
export async function generateStaticParams() {
  return alternatives.map((alt: any) => ({
    slug: alt.slug,
  }));
}


export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const alt = alternatives.find((a: any) => a.slug === slug);

  if (!alt) {
    return <div className="p-10 text-xl">Alternative page not found</div>;
  }

  const replacementProducts = products.filter((p: any) =>
    alt.products.includes(p.slug)
  );
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": `Is ${alt.foreignBrand} an Indian company?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${alt.foreignBrand} is not an Indian owned company. This page lists verified Indian alternatives based on ownership and manufacturing transparency.`
      }
    },
    {
      "@type": "Question",
      "name": `What is the best Indian alternative to ${alt.foreignBrand}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Several Indian brands provide comparable quality. See the recommended alternatives listed above along with ingredients and brand origin details.`
      }
    },
    {
      "@type": "Question",
      "name": `Why switch to Indian brands?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Many consumers prefer transparent ownership, local manufacturing and traditional formulations when choosing everyday products.`
      }
    }
  ]
};

  return (
    <main className="p-10">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>

      <h1 className="text-3xl font-bold mb-6">
        Best Indian alternatives to {alt.foreignBrand}
      </h1>

      <div className="mb-10 max-w-2xl text-gray-600 text-lg leading-relaxed">
        <p>
          Looking to replace <span className="font-semibold text-gray-900">{alt.foreignBrand}</span> with an Indian brand?
          We research ownership, manufacturing location, and brand origin to find trustworthy Indian alternatives.
        </p>

        <p className="mt-3">
          Every recommendation here is selected for quality first — not just country of origin.
        </p>
      </div>

      <div className="space-y-8">
        {replacementProducts.map((item: any, i: number) => (
          <div
            key={i}
            className="border border-[var(--india-border)] bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">

              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={130}
                  height={130}
                  className="rounded-xl object-contain bg-[var(--india-light)] p-3"
                />
              )}

              <div className="flex-1 text-center md:text-left space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  {item.name}
                </h2>

                <p className="text-[var(--india-green)] font-semibold">
                  {item.tagline || "Quality Indian alternative"}
                </p>

                <p className="text-gray-600">
                  Brand: {item.brand}
                </p>

                {item.benefits && (
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    {item.benefits.map((b: string, idx: number) => (
                      <li key={idx}>• {b}</li>
                    ))}
                  </ul>
                )}

                <a
                  href={`/product/${item.slug}`}
                  className="inline-block text-[var(--india-green)] font-semibold hover:underline"
                >
                  View product details →
                </a>

                <div className="mt-2 inline-block bg-[var(--india-light)] border border-[var(--india-border)] text-[var(--india-green)] px-3 py-1 rounded-full text-xs font-semibold">
                  🇮🇳 Verified Indian Brand
                </div>

                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  {item.proof?.map((p: string, idx: number) => (
                    <li key={idx}>✔ {p}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 w-full md:w-52">
                <a
                  href={item.amazon}
                  target="_blank"
                  className="text-center bg-[#ff9900] hover:bg-[#e38800] text-white font-semibold py-2 rounded-lg transition"
                >
                  Buy on Amazon
                </a>

                <a
                  href={item.flipkart}
                  target="_blank"
                  className="text-center bg-[#2874f0] hover:bg-[#1f5dc4] text-white font-semibold py-2 rounded-lg transition"
                >
                  Buy on Flipkart
                </a>
              </div>

            </div>
          </div>
        ))}
        {/* Related searches / Internal linking */}

<section className="mt-14">
  <h2 className="text-2xl font-bold mb-5 text-gray-900">
    People also searched for
  </h2>

  <div className="flex flex-wrap gap-3">
    {alternatives
  .filter((a: any) =>
    a.slug !== slug &&
    a.category === alt.category
  )
  .slice(0, 6)
  .map((a: any) => (

        <Link
  key={a.slug}
  href={`/alternative/${a.slug}`}
  className="px-4 py-2 rounded-full border border-[var(--india-border)] bg-white hover:bg-[var(--india-light)] transition text-sm"
>
  {a.foreignBrand} alternatives
</Link>

      ))}
  </div>
</section>

      </div>

      {/* ================= COMPARISON SECTION (NEW) ================= */}

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="bg-red-50 p-6 rounded-xl border">
          <h3 className="font-bold text-lg mb-3">
            Why people avoid {comparison.foreign_brand}
          </h3>
          <ul className="space-y-2 text-sm">
            {comparison.why_switch.map((p: string, i: number) => (
              <li key={i}>✗ {p}</li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border">
          <h3 className="font-bold text-lg mb-3">
            Why switch to Indian alternatives
          </h3>
          <ul className="space-y-2 text-sm">
            {comparison.why_indian.map((p: string, i: number) => (
              <li key={i}>✓ {p}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-6 max-w-3xl">
        {comparison.disclaimer}
      </p>
{/* Trust / Research Methodology Section */}

<section className="mt-16 max-w-4xl text-gray-700 leading-relaxed">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">
    How we verify Indian brands
  </h2>

  <p className="mb-4">
    Switch To India does not recommend products based on emotion or trends.
    Every alternative listed here is researched using publicly available company records.
  </p>

  <ul className="space-y-2 list-disc pl-6">
    <li>Company ownership filings and parent corporation details</li>
    <li>Manufacturing location and supply chain origin</li>
    <li>Trademark registration country</li>
    <li>Import vs domestic production verification</li>
    <li>Brand history and incorporation records</li>
  </ul>

  <p className="mt-5">
    Our goal is simple: help consumers make informed decisions using transparent information —
    not blind nationalism.
  </p>

  <div className="mt-6 text-sm text-gray-500">
    Information sources: MCA filings, trademark registry, company annual reports and official disclosures.
  </div>
</section>

    </main>
  );
}
