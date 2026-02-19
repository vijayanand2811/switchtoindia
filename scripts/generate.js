const fs = require("fs");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const lines = fs.readFileSync("./scripts/input.txt", "utf8").split("\n");

let alternatives = {};
let products = [];

lines.forEach(line => {
  if (!line.trim()) return;

  const [foreign, productName, brand] = line.split("|").map(s => s.trim());

  const foreignSlug = slugify(foreign + "-alternative-india");
  const productSlug = slugify(productName);

  if (!alternatives[foreignSlug]) {
    alternatives[foreignSlug] = {
      slug: foreignSlug,
      foreignBrand: foreign,
      products: []
    };
  }

  alternatives[foreignSlug].products.push(productSlug);

  products.push({
    slug: productSlug,
    name: productName,
    brand: brand,
    alternative: foreignSlug,
    image: "",
    amazon: "https://www.amazon.in/",
    flipkart: "https://www.flipkart.com/"
  });
});

fs.writeFileSync("./scripts/output-products.json", JSON.stringify(products, null, 2));
fs.writeFileSync("./scripts/output-alternatives.json", JSON.stringify(Object.values(alternatives), null, 2));

console.log("DONE — JSON generated");
