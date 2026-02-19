import { Metadata } from "next";
import brands from "@/data/brand-origin.json";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b: any) => b.slug === slug);

  if (!brand) return {};

  return {
    title: `Is ${brand.name} Indian? Country, Owner & Alternatives`,
    description: `Find out whether ${brand.name} is an Indian brand. See country of origin, owner company and Indian alternatives.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const brand = brands.find((b: any) => b.slug === slug);

  if (!brand) {
    return <div className="p-10 text-xl">Brand not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto p-8 space-y-6">
      <h1 className="text-4xl font-bold">
        Is {brand.name} an Indian brand?
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed">
        {brand.summary}
      </p>

      <div className="border rounded-xl p-5 bg-white shadow-sm space-y-2">
        <p><strong>Country of origin:</strong> {brand.country}</p>
        <p><strong>Owner company:</strong> {brand.owner}</p>
        <p><strong>Founded:</strong> {brand.founded}</p>
        <p>
          <strong>Manufactured in India:</strong>{" "}
          {brand.manufacturedInIndia ? "Yes (but foreign owned)" : "No"}
        </p>
      </div>

      {brand.indianAlternative && (
        <Link
          href={`/alternative/${brand.indianAlternative}`}
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          See Indian alternatives →
        </Link>
      )}
      <hr className="my-10" />

<div className="space-y-4">
  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

  <div>
    <h3 className="font-semibold">Is {brand.name} an Indian company?</h3>
    <p className="text-gray-600">
      No. {brand.name} is a {brand.country} brand owned by {brand.owner}.
    </p>
  </div>

  <div>
    <h3 className="font-semibold">Is {brand.name} made in India?</h3>
    <p className="text-gray-600">
      {brand.manufacturedInIndia
        ? "Some products are manufactured in India but the company is foreign owned."
        : "Products are not manufactured in India."}
    </p>
  </div>

  <div>
    <h3 className="font-semibold">Are there Indian alternatives to {brand.name}?</h3>
    <p className="text-gray-600">
      Yes. We list verified Indian brand alternatives on this page.
    </p>
  </div>
</div>

    </main>
  );
}
