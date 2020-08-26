// Product List
module.exports.sampleProductList = [
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
  {
    id: 3,
    name: "Morning Joggers",
    slogan: "Make yourself a morning person",
    description:
      "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: "Pants",
    default_price: "40",
  },
  {
    id: 4,
    name: "Slacker's Slacks",
    slogan: "Comfortable for everything, or nothing",
    description: "I'll tell you how great they are after I nap for a bit.",
    category: "Pants",
    default_price: "65",
  },
  {
    id: 5,
    name: "Heir Force Ones",
    slogan: "A sneaker dynasty",
    description:
      "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: "Kicks",
    default_price: "99",
  },
];

// Product Information (:product_id = 6)
module.exports.sampleProductInformation = {
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
    {
      feature: "Mid-Sole",
      value: "ControlSupport Arch Bridge",
    },
    {
      feature: "Stitching",
      value: "Double Stitch",
    },
  ],
};

// Product Styles (:product_id = 6)
module.exports.sampleProductStyles = {
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
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2982&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80",
        },
        {
          thumbnail_url:
            "uhttps://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1548861216-17dd1ac80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        },
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
    },
    {
      style_id: 31,
      name: "Black",
      original_price: "89",
      sale_price: "0",
      "default?": 0,
      photos: [
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1536830220630-ce146cccac84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1526113438757-122d6d54da4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1563&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1534960680480-ca9853707e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2384&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1519330377309-9ee1c6783348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/11/converse-fields.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1522032238811-74bc59578599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        },
        {
          thumbnail_url:
            "https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          url:
            "https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80",
        },
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
    },
  ],
};

// Related Products (:product_id = 6)
module.exports.sampleRelatedProducts = [6, 2, 5, 3, 2];

// Cart
module.exports.sampleCart = [
  {
    id: 1,
    user_session: 1234,
    product_id: 1,
    active: 1,
  },
];

// Reviews List (:product_id = 6)
module.exports.sampleReviews = {
  product: "2",
  page: 0,
  count: 5,
  results: [
    {
      review_id: 57336,
      rating: 2,
      summary: "testsumm",
      recommend: 1,
      response: null,
      body: "bodynasty",
      date: "2019-10-22T00:00:00.000Z",
      reviewer_name: "asdfs",
      helpfulness: 29,
      photos: [],
    },
    {
      review_id: 57337,
      rating: 3,
      summary: "Enter summary here..",
      recommend: 1,
      response: null,
      body: "bodynasty",
      date: "2019-10-22T00:00:00.000Z",
      reviewer_name: "asdfs",
      helpfulness: 2,
      photos: [],
    },
    {
      review_id: 57344,
      rating: 4,
      summary: "new message",
      recommend: 1,
      response: null,
      body: "newnew",
      date: "2019-10-25T00:00:00.000Z",
      reviewer_name: "asdfs",
      helpfulness: 1,
      photos: [],
    },
    {
      review_id: 57338,
      rating: 4,
      summary: "yahh",
      recommend: 1,
      response: null,
      body: "newnew",
      date: "2019-10-25T00:00:00.000Z",
      reviewer_name: "asdfs",
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 57339,
      rating: 4,
      summary: "yahh",
      recommend: 1,
      response: null,
      body: "newnew",
      date: "2019-10-25T00:00:00.000Z",
      reviewer_name: "asdfs",
      helpfulness: 0,
      photos: [],
    },
  ],
};
