import axios from 'axios';

const baseDomain = 'https://elbdev.myshopify.com';
const apiVersion = '2020-07';
const shopifyToken = '2015a04f9faf9795be368b343db2e5d5';
const baseURL = `${baseDomain}/api/${apiVersion}/graphql.json`;

export default class ShopifyClient {

  static query(gqlData: any, successCallback: any, errorCallback: any) {
    const config = {
      headers: {
        'X-Shopify-Storefront-Access-Token': shopifyToken,
        'Content-Type': 'application/json',
      }
    };

    axios.post(baseURL, gqlData, config)
      .then(successResponse => {
        console.log('Success', successResponse);
        successCallback(successResponse);
      })
      .catch(errorResponse => {
        console.log('Error', errorResponse);
        errorCallback(errorResponse);
      });
  }

  // Get all products
  static getAllProducts(successCallback: any, errorCallback: any) {
    const graphquery = `
      query {
        products(first:20) {
          edges {
            node {
              id
              title
              description
              productType
              images(first: 1) {
                edges {
                  node {
                    altText
                    originalSrc
                  }
                }
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    priceV2 {
                      amount
                      currencyCode
                    }
                    image {
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    ShopifyClient.query({query: graphquery}, (responseSuccess: { data: any }) => {
      // Do something
      console.log('hello');
    }, (responseError: any) => {
      console.log('You such', responseError);
      errorCallback(responseError);
    });
  }
}
