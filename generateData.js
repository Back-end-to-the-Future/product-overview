const faker = require("faker");
const fs = require("fs");
// ****************************************************************************
// *** Products Table Generation ***
const generateProducts = (productRecords) => {
  let start = Date.now();
  let productsData = "name, slogan, description, category, default_price\n";

  for (let i = 2500001; i <= productRecords; i++) {
    let name = faker.commerce.productName();
    let slogan = faker.company.catchPhrase();
    let description = faker.commerce.productDescription();
    let category = faker.commerce.department();
    let default_price = faker.commerce.price();

    productsData = productsData.concat(
      `"${name}", "${slogan}", "${description}", "${category}", "${default_price}"\n`
    );
  }

  fs.appendFile(
    "./csv_files/productData10.csv",
    productsData,
    "utf8",
    (err) => {
      if (err) return console.log(err);

      console.log(
        `Products written in: ${(Date.now() - start) / 1000} seconds.`
      );
    }
  );
};
// ****************************************************************************
// *** Features Table Generation ***
const generateFeatures = (productRecords) => {
  let start = Date.now();

  let featuresData = "feature, value, product_id\n";

  for (let i = 1; i <= productRecords; i++) {
    let numberOfFeatures = parseInt(Math.random() * 5 + 1);

    for (let j = 1; j <= numberOfFeatures; j++) {
      let feature = faker.commerce.product();
      let value = faker.commerce.productMaterial();

      featuresData = featuresData.concat(`"${feature}", "${value}", ${i}\n`);
    }
  }

  fs.writeFile("./csv_files/featuresData2.csv", featuresData, "utf8", (err) => {
    if (err) return console.log(err);
    console.log(`Features written in: ${(Date.now() - start) / 1000} seconds.`);
  });
};
// ****************************************************************************
// *** Styles Table Generation ***
const generateStyles = (productRecords) => {
  let stylesCount = 0;
  let numberOfStyles = 1;
  let stylesData =
    "name, original_price, sale_price, defaultStyle, product_id\n";

  for (let i = 1; i <= productRecords; i++) {
    let isDefault = true;

    for (let j = 1; j <= numberOfStyles; j++) {
      let name = faker.commerce.color();
      let origPrice = parseInt(faker.commerce.price());
      let salePrice = i % 3 === 0 ? origPrice * 0.75 : 0;
      let defaultStyle = isDefault ? 1 : 0;

      stylesData = stylesData.concat(
        `"${name}", "${origPrice}", "${salePrice}", ${defaultStyle}, ${i}\n`
      );

      isDefault = false;
      stylesCount++;
    }
    numberOfStyles < 8 ? numberOfStyles++ : (numberOfStyles = 1);
  }

  fs.writeFile("./csv_files/stylesData.csv", stylesData, "utf8", (err) => {
    if (err) return console.log(err);
    console.log("styles written");
  });
  return stylesCount;
};
// ****************************************************************************
// *** Photos Table Generation ***
const generatePhotos = (stylesCount) => {
  let photosData = "thumbnail_url, url, style_id\n";
  let photosData = "";

  for (let i = 4000001; i <= stylesCount; i++) {
    let numberOfPhotos = parseInt(Math.random() * 6 + 1);
    for (let j = 0; j < numberOfPhotos; j++) {
      let thumb = faker.image.imageUrl();
      let image = faker.image.imageUrl();
      photosData = photosData.concat(`"${thumb}", "${image}", ${i}\n`);
    }
  }

  fs.appendFile("./csv_files/photosData.csv", photosData, "utf8", (err) => {
    if (err) return console.log(err);
    console.log("photos written");
  });
};
// ****************************************************************************
// *** Skus Table Generation ***
const generateSkus = (stylesCount) => {
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

  let skusData = "size, quantity, style_id\n";
  // let skusData = "";
  let optionsGroupCount = 0;
  let optionsGroupSize = 1;
  let skuOption = 0;

  for (let i = 4000001; i <= stylesCount; i++) {
    for (let j = 0; j < options[skuOption].length; j++) {
      let quantity = parseInt(Math.random() * 15);
      skusData = skusData.concat(
        `"${options[skuOption][j]}", "${quantity}", ${i}\n`
      );
    }

    optionsGroupCount++;
    if (optionsGroupCount === optionsGroupSize) {
      if (optionsGroupSize < 8) {
        optionsGroupSize++;
      } else {
        optionsGroupSize = 1;
      }
      skuOption === 0 ? (skuOption = 1) : (skuOption = 0);
      optionsGroupCount = 0;
    }
  }

  fs.appendFile("./csv_files/skusData.csv", skusData, "utf8", (err) => {
    if (err) return console.log(err);
    console.log("skus written");
  });
};

// ****************************************************************************
// ****************************************************************************
// RUN DATA GENERATION FUNCTIONS
let totalProducts = 10000000;
// generateProducts(totalProducts);
// generateProducts(totalProducts);
// generateFeatures(totalProducts);
// let stylesCount = generateStyles(totalProducts);
// console.log(stylesCount);
// generatePhotos(4500000);
// generateSkus(4500000);
