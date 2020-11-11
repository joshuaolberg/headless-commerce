import axios from 'axios';

let shopifyDomain = 'elbdev.myshopify.com';
let config = {
  headers: {
    'X-Shopify-Storefront-Access-Token': '2015a04f9faf9795be368b343db2e5d5',
    'Content-Type': 'application/graphql',
  }
}

export default {
  getShopName() {
    const query = `
      {
        shop {
          name
        }
      }`
    return axios.post('https://' + shopifyDomain + '/api/graphql', query, config);
  },

  getProducts() {
    const query = `
    {
      shop {
        products(first: 20) {
          edges {
            node {
              id
              title
              description
            }
          }
        }
      }
    }`
    return axios.post('https://' + shopifyDomain + '/api/graphql', query, config);
  },

  getProductsById() {
    console.log('Hello');
  }
}

