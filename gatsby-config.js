require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        basePath: '/',
        shopifyLite: false,
        enableWebp: true,
        imageQuality: '95',
        manifest: {
          name: 'Goofy Ghost Storefront Demo',
          short_name: 'Goofy Ghost',
          start_url: '/',
          background_color: '#fff',
          theme_color: '#333',
          display: 'standalone',
          icon: 'src/images/goofyghost_0.png',
          cache_busting_mode: 'none',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://goofyghoost.netlify.app',
    gatsbyStorefrontConfig: {
      storeName: 'Goofy Ghost',
      logoUrl: `https://i.imgur.com/D3d1Skr.png`,
      storeDescription: 'Buy awesome nerdy merchandise from your favorite lore',
      email: 'hello@goofyghoost.com',
      company: 'Novvum',
      location: 'Irvine, CA',
      address: '132 Baker St.',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'Anime',
              type: 'collection',
              handle: 'anime',
              textColor: 'orange',
              textBgColor: 'white',
            },
            {
              name: 'Star Wars',
              type: 'collection',
              handle: 'star-wars',
              textColor: 'white',
              textBgColor: 'white',
            },
            {
              name: 'Marvel',
              type: 'collection',
              handle: 'marvel',
              textColor: 'white',
              textBgColor: 'white',
            },
            {
              name: 'DC Comics',
              type: 'collection',
              handle: 'dc-comics',
              textColor: 'white',
              textBgColor: 'white',
            },
          ],
        },
        {
          name: 'Shop Marvel',
          type: 'collection',
          handle: 'marvel',
          textColor: 'transparent',
          textBgColor: 'white',
        },
        {
          name: 'Shop DC Comics',
          type: 'collection',
          handle: 'dc-comics',
          textColor: 'transparent',
          textBgColor: 'black',
        },
        {
          name: 'Shop Star Wars',
          type: 'collection',
          handle: 'star-wars',
          textColor: 'transparent',
          textBgColor: 'white',
        },
        {
          name: 'Shop Anime',
          type: 'collection',
          handle: 'anime',
          textColor: 'transparent',
          textBgColor: 'white',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: "Women's",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'Apparel',
                type: 'collection',
                handle: 'womens-apparel',
              },
            ],
          },
          {
            name: "Men's",
            type: 'header',
            children: [
              {
                name: 'Apparel',
                type: 'collection',
                handle: 'mens-apparel',
              },
              {
                name: 'External links',
                type: 'header',
                children: [
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                ],
              },
            ],
          },
          { name: 'Blog', type: 'blog', handle: 'news' },
        ],
      }),
      footerLinks: [
        // {
        //   name: 'About us',
        //   link: '/pages/about',
        // },
        // {
        //   name: 'Terms of Service',
        //   link: '/policy/termsOfService',
        // },
        // {
        //   name: 'Privacy policy',
        //   link: '/policy/privacyPolicy',
        // },
        // {
        //   name: 'Refunds',
        //   link: '/policy/refundPolicy',
        // },
        {
          name: 'Novvum',
          link: 'https://novvum.io',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
