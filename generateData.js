const faker = require("faker");
const fs = require("fs");

// *** Products Table Generation ***
let productsData = "name, slogan, description, category, default_price\n";
let productCount = 100;

for (let i = 0; i < productCount; i++) {
  let name = faker.commerce.productName();
  let slogan = faker.company.catchPhrase();
  let description = faker.commerce.productDescription();
  let category = faker.commerce.department();
  let default_price = faker.commerce.price();

  productsData = productsData.concat(
    `"${name}", "${slogan}", "${description}", "${category}", "${default_price}"\n`
  );
}
// console.log(productsData);
fs.writeFile("./csv_files/productData.csv", productsData, "utf8", (err) => {
  if (err) return console.log(err);
  console.log("products written");
});

//  *** Features Table Generation ***
let featuresData = "feature, value, product_id\n";
let featuresCount = 25;

for (let i = 0; i < featuresCount; i++) {
  let product_id = parseInt(Math.random() * featuresCount + 1);
  let feature = faker.commerce.product();
  let value = faker.commerce.productMaterial();

  featuresData = featuresData.concat(
    `"${feature}", "${value}", ${product_id}\n`
  );
}
// console.log(featuresData);
fs.writeFile("./csv_files/featuresData.csv", featuresData, "utf8", (err) => {
  if (err) return console.log(err);
  console.log("features written");
});

//  *** Styles Table Generation ***
let stylesData = "name, original_price, sale_price, defaultStyle, product_id\n";
let stylesCount = 25;

for (let i = 0; i < stylesCount; i++) {
  let product_id = parseInt(Math.random() * stylesCount + 1);
  let name = faker.commerce.color();
  let origPrice = faker.commerce.price();
  let salePrice = i % 3 === 0 ? origPrice * 0.75 : 0;
  let defaultStyle = 0;

  stylesData = stylesData.concat(
    `"${name}", "${origPrice}", "${salePrice}", ${defaultStyle}, ${product_id}\n`
  );
}
// console.log(stylesData);
fs.writeFile("./csv_files/stylesData.csv", stylesData, "utf8", (err) => {
  if (err) return console.log(err);
  console.log("styles written");
});

//  *** Photos Table Generation ***
let photosData = "thumbnail_url, url, style_id\n";
let photosCount = 25;

for (let i = 0; i < photosCount; i++) {
  let style_id = parseInt(Math.random() * photosCount + 1);
  let thumb = faker.image.imageUrl();
  let image = faker.image.imageUrl();

  photosData = photosData.concat(`"${thumb}", "${image}", ${style_id}\n`);
}
// console.log(photosData);
fs.writeFile("./csv_files/photosData.csv", photosData, "utf8", (err) => {
  if (err) return console.log(err);
  console.log("photos written");
});

//  *** Skus Table Generation ***
let skusData = "size, quantity, style_id\n";
let skusCount = 10;
let options = [
  ["XS", "S", "M", "L", "XL", "XXL", "XXL"],
  [
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
  ],
];

for (let i = 0; i < skusCount; i++) {
  let style_id = parseInt(Math.random() * skusCount + 1);
  let quantity = parseInt(Math.random() * 15);
  // If style id is even, use letter options otherwise use number options
  let size =
    options[style_id % 2 === 0 ? 0 : 1][
      parseInt(Math.random() * options[0].length + 0)
    ];

  skusData = skusData.concat(`"${size}", "${quantity}", ${style_id}\n`);
}
// console.log(skusData);
fs.writeFile("./csv_files/skusData.csv", skusData, "utf8", (err) => {
  if (err) return console.log(err);
  console.log("skus written");
});
