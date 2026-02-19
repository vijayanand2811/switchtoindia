import Link from "next/link";

export default function FeaturedBrand() {
  return (
    <Link href="/advertise">
      <div className="border-2 border-green-600 bg-green-50 p-5 rounded-xl mb-8 hover:bg-green-100 cursor-pointer">
        <p className="text-sm font-semibold text-green-700">FEATURED INDIAN BRAND</p>
        <h2 className="text-2xl font-bold mt-1">Advertise your brand here 🇮🇳</h2>
        <p className="text-gray-700 mt-2">
          Click to list your brand on SwitchToIndia
        </p>
      </div>
    </Link>
  );
}
