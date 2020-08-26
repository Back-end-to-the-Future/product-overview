# Project Name

> Product detail

## Related Projects

- https://github.com/kwrnFec/honorio_proxy
- https://github.com/kwrnFec/shared_resources
- https://github.com/kwrnFec/related_items_module
- https://github.com/kwrnFec/q_and_a_module
- https://github.com/kwrnFec/ratings_and_reviews_module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Products API

Product List

- Retrieves the List of Products.
  > GET /products/list

```sh
  [
  {
  id: 1,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd",
  description:
  "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  category: "Jackets",
  default_price: "140",
  },
  {
  id: 2,
  name: "Bright Future Sunglasses",
  slogan: "You've got to wear shades",
  description:
  "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
  category: "Accessories",
  default_price: "69",
  },
  // ...
  ]
```

Product Information

- Returns all product level information for a specified product id.
  > GET /products/:product_id

```sh
  {
  id: 6,
  name: "Pumped Up Kicks",
  slogan: "Faster than a just about anything",
  description:
  "The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.",
  category: "Kicks",
  default_price: "89",
  features: [
  {
  feature: "Sole",
  value: "Rubber",
  },
  {
  feature: "Material",
  value: "FullControlSkin",
  },
  // ...
  ],
  }
```

Product Styles

- Returns the all styles available for the given product.
  > GET /products/:product_id/styles

```sh
  {
  product_id: "6",
  results: [
  {
  style_id: 30,
  name: "White",
  original_price: "89",
  sale_price: "0",
  "default?": 1,
  photos: [
  {
  thumbnail_url:
  "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
  url:
  "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  },
  {
  thumbnail_url:
  "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
  url:
  "https://images.unsplash.com/photo-1518687338977-a84d3086a934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80",
  },
  // ...
  ],
  skus: {
  7: 14,
  8: 9,
  9: 18,
  10: 10,
  11: 11,
  12: 25,
  7.5: 25,
  8.5: 2,
  9.5: 12,
  10.5: 18,
  11.5: 35,
  },
  // ...
  }
```

Related Products

- Returns the id's of products related to the product specified.
  > GET /products/:product_id/related

```sh
  [
  6,
  2,
  5,
  3,
  2
  ]
```

Reviews

- Returns a list of reviews for a particular product. This list does not include any reported reviews.
  > GET /reviews/:product_id/list

```sh
{
  product: "6",
  page: 0,
  count: 5,
  results: [],
}
```
