const faker = require("faker");
const fs = require("fs");
// ****************************************************************************
// *** Products Table Generation ***
const generateStreamProducts = (productRecords) => {
  let start = Date.now();
  const writeStream = fs.createWriteStream("./csv_files/oneMillion/productsData1M.csv");
  writeStream.write(
    "name, slogan, description, category, default_price\n",
    "utf8"
  );

  function writeAllData(writer, encoding, callback) {
    let i = productRecords;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        // id += 1;
        let name = faker.commerce.productName();
        let slogan = faker.company.catchPhrase();
        let description = faker.commerce.productDescription();
        let category = faker.commerce.department();
        let default_price = faker.commerce.price();
        let productsData = `"${name}", "${slogan}", "${description}", "${category}", "${default_price}"\n`;
        if (i === 0) {
          writer.write(productsData, encoding, callback);
        } else {
          // see if we should continue, or wait
          // don't pass the callback, because we're not done yet.
          ok = writer.write(productsData, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once("drain", write);
      }
    }
    write();
  }

  writeAllData(writeStream, "utf-8", () => {
    writeStream.end();
    console.log(`Products written in: ${(Date.now() - start) / 1000} seconds.`);
  });
};
// ****************************************************************************
// *** Features Table Generation ***
const generateStreamFeatures = (productRecords) => {
  let start = Date.now();
  const writeStream = fs.createWriteStream("./csv_files/oneMillion/featuresData1M.csv");
  writeStream.write("feature, value, product_id\n", "utf8");

  function writeAllData(writer, encoding, callback) {
    let i = productRecords;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        let feature = faker.commerce.product();
        let value = faker.commerce.productMaterial();

        let featuresData = `"${feature}", "${value}", ${id}\n`;
        if (i === 0) {
          writer.write(featuresData, encoding, callback);
        } else {
          // see if we should continue, or wait
          // don't pass the callback, because we're not done yet.
          ok = writer.write(featuresData, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once("drain", write);
      }
    }
    write();
  }

  writeAllData(writeStream, "utf-8", () => {
    writeStream.end();
    console.log(`Features written in: ${(Date.now() - start) / 1000} seconds.`);
  });
};
// ****************************************************************************
// *** Styles Table Generation ***
const generateStreamStyles = (productRecords) => {
  let start = Date.now();
  let stylesCount = 0;
  const writeStream = fs.createWriteStream("./csv_files/oneMillion/stylesData1M.csv");
  writeStream.write(
    "name, original_price, sale_price, defaultStyle, product_id\n",
    "utf8"
  );

  let id = 0;
  function writeAllData(writer, encoding, callback) {
    let i = productRecords;
    let isDefault = true;
    let numberOfStyles = 1;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        let stylesData = "";

        for (let j = 1; j <= numberOfStyles; j++) {
          let name = faker.commerce.color();
          let origPrice = parseInt(faker.commerce.price());
          let salePrice = i % 3 === 0 ? origPrice * 0.75 : 0;
          let defaultStyle = isDefault ? 1 : 0;

          stylesData = stylesData.concat(
            `"${name}", "${origPrice}", "${salePrice}", ${defaultStyle}, ${id}\n`
          );
          isDefault = false;
          stylesCount++;
        }
        numberOfStyles < 8 ? numberOfStyles++ : (numberOfStyles = 1);

        if (i === 0) {
          writer.write(stylesData, encoding, callback);
        } else {
          // see if we should continue, or wait
          // don't pass the callback, because we're not done yet.
          ok = writer.write(stylesData, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once("drain", write);
      }
    }
    write();
  }

  writeAllData(writeStream, "utf-8", () => {
    writeStream.end();
  });

  console.log(`Styles written in: ${(Date.now() - start) / 1000} seconds.`);
  return id;
};
// ****************************************************************************
// *** Photos Table Generation ***
const generateStreamPhotos = (productRecords) => {
  let start = Date.now();
  const writeStream = fs.createWriteStream("./csv_files/oneMillion/photosData1M.csv");
  writeStream.write("thumbnail_url, url, style_id\n", "utf8");

  function writeAllData(writer, encoding, callback) {
    let i = productRecords;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        let photosData = "";
        let numberOfPhotos = parseInt(Math.random() * 6 + 1);
        for (let j = 0; j < numberOfPhotos; j++) {
          let thumb = faker.image.imageUrl();
          let image = faker.image.imageUrl();

          photosData = photosData.concat(`"${thumb}", "${image}", ${id}\n`);
        }

        if (i === 0) {
          writer.write(photosData, encoding, callback);
        } else {
          // see if we should continue, or wait
          // don't pass the callback, because we're not done yet.
          ok = writer.write(photosData, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once("drain", write);
      }
    }
    write();
  }

  writeAllData(writeStream, "utf-8", () => {
    writeStream.end();
    console.log(`Photos written in: ${(Date.now() - start) / 1000} seconds.`);
  });
};
// ****************************************************************************
// *** Skus Table Generation ***
const generateStreamSkus = (productRecords) => {
  let start = Date.now();
  const writeStream = fs.createWriteStream("./csv_files/oneMillion/skusData1M.csv");
  writeStream.write("size, quantity, style_id\n", "utf8");
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

  function writeAllData(writer, encoding, callback) {
    let i = productRecords;
    let id = 0;
    let optionsGroupCount = 0;
    let optionsGroupSize = 1;
    let skuOption = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        let skusData = "";
        for (let j = 0; j < options[skuOption].length; j++) {
          let quantity = parseInt(Math.random() * 15);
          skusData = skusData.concat(`"${options[skuOption][j]}", "${quantity}", ${id}\n`);
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

        if (i === 0) {
          writer.write(skusData, encoding, callback);
        } else {
          // see if we should continue, or wait
          // don't pass the callback, because we're not done yet.
          ok = writer.write(skusData, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        // had to stop early!
        // write some more once it drains
        writer.once("drain", write);
      }
    }
    write();
  }

  writeAllData(writeStream, "utf-8", () => {
    writeStream.end();
    console.log(`Skus written in: ${(Date.now() - start) / 1000} seconds.`);
  });
};

// ****************************************************************************

// ****************************************************************************
// ****************************************************************************
// RUN DATA GENERATION FUNCTIONS
let totalProducts = 1000000;
generateStreamProducts(totalProducts);
// generateStreamFeatures(totalProducts);
// generateStreamStyles(totalProducts);
// let totalStyles = 4500000;
// generateStreamPhotos(totalStyles);
// generateStreamSkus(totalStyles);
