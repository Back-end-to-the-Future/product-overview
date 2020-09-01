const express = require("express");
const cors = require("cors");
const axios = require("axios").default;
const sample = require("./sampleDataSDC.js");
const pool = require("./db");

const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const { query } = require("./db");

const port = 3333;
const url = "http://52.26.193.201:3000";
const prefix = "/ov";
// const url = 'http://18.224.200.47/';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(cors());

// SEND bundle.js FILE
app.get("/ov", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist/bundle.js"));
});

// PRODUCTS
app.get(`${prefix}/products/list`, async (req, res) => {
  pool
    .query(
      "SELECT id, name, slogan, description, category, default_price FROM products"
    )
    .then((result) => res.status(200).json(result.rows))
    .catch((err) => res.status(500).send(err.message));
});

app.get(`${prefix}/products/:product_id/`, async (req, res) => {
  const { product_id } = req.params;
  pool
    .query(
      `SELECT products.id, name, slogan, description, category, default_price,
        json_agg (json_build_object('feature', features.feature, 'value', features.value)) AS features
      FROM products 
      INNER JOIN features
      ON products.id = features.product_id
      WHERE products.id = $1
      GROUP BY products.id;`,
      [product_id]
    )
    .then((result) => res.status(200).json(result.rows[0]))
    .catch((err) => res.status(500).send(err.message));
});

app.get(`${prefix}/products/:product_id/styles`, (req, res) => {
  const { product_id } = req.params;
  let stylesObject = {
    product_id: `${product_id}`,
    results: [],
  };

  pool
    .query(
      `SELECT json_agg(row_to_json(results)) as results
      FROM (

        SELECT id as style_id, name, trim(original_price) as original_price, trim(sale_price) as sale_price, defaultStyle as "default?",

          (SELECT json_agg( row_to_json(photo)) as photos
            FROM

              (SELECT thumbnail_url, url
              FROM photos
              WHERE photos.style_id = styles.id
              ) photo),

              (SELECT
                json_object_agg(size, quantity ORDER BY size
                ) AS skus
              FROM skus
              WHERE skus.style_id = styles.id

              )

        FROM styles
        WHERE product_id = ${product_id}
      ) results`
    )
    .then((result) => {
      stylesObject.results = result.rows[0].results;
      res.status(200).json(stylesObject);
    })
    .catch((err) => res.status(500).json(err.message));
});

app.get(`${prefix}/products/:product_id/related`, (req, res) => {
  // res.status(200).send(sample.sampleRelatedProducts);
  axios
    .get(`${url}/products/${req.params.product_id}/related`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(500).send(err));
});

// CART
app.get(`${prefix}/cart/:user_session`, (req, res) => {
  axios
    .get(`${url}/cart/${req.params.user_session}`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(500).send(err));
});

app.post(`${prefix}/cart/`, (req, res) => {
  axios
    .post(`${url}/cart/`, {
      user_session: req.params.user_session,
      product_id: req.params.product_id,
    })
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(500).send(err));
});

// REVIEWS
app.get(`${prefix}/reviews/:product_id/list`, (req, res) => {
  axios
    .get(`${url}/reviews/${req.params.product_id}/list`, {
      params: {
        count: 20,
        sort: "newest",
      },
    })
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
