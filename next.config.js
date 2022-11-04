/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    WORDPRESS_STORE_DOMAIN: process.env.WORDPRESS_ACCESSTOKEN,
    WORDPRESS_STOREFRONT_ACCESSTOKEN:
      process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
  images: {
    domains: ['http://onlinestore.fi/'],
  },
};
