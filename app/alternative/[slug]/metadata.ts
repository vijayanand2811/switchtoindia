import alternatives from "@/data/alternatives.json";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const alt = alternatives.find((a: any) => a.slug === params.slug);

  if (!alt) return {};

  return {
    title: `Best Indian alternatives to ${alt.foreignBrand} (2025)`,
    description: `Looking for an Indian alternative to ${alt.foreignBrand}? Compare ownership, ingredients and brand origin. Verified Indian brands listed.`,
    keywords: [
      `${alt.foreignBrand} alternative`,
      `${alt.foreignBrand} indian alternative`,
      `replace ${alt.foreignBrand}`,
      `is ${alt.foreignBrand} indian`,
      `indian toothpaste brands`
    ],
    openGraph: {
      title: `Indian alternatives to ${alt.foreignBrand}`,
      description: `Compare Indian brands vs ${alt.foreignBrand}`,
      type: "article"
    }
  };
}
