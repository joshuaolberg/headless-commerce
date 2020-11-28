import axios from 'axios';
import {Product, ProductImage, ProductVariant} from "~/store/products.types";

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
      // Get Productdata and normalize them
      const products = responseSuccess.data.data.products.edges;
      const normalizedProducts: Product[] = [];

      products.forEach((element: any) => {
        // Get the product image info
        // and prep it for the product object
        const images: ProductImage[] = [];

        // Normalize each image attached to the product
        element.node.images.edges.forEach((imageElement: any) => {
          const normalizedProductImage: ProductImage = {
            id: imageElement.node.id,
            src: imageElement.node.originalSrc,
            altText: imageElement.node.altText,
          };
          images.push(normalizedProductImage);
        });

        // Normalize each variant for the product
        const variants: ProductVariant[] = [];
        element.node.variants.edges.forEach((variantElement: any) => {
          const normalizedProductVariant: ProductVariant = {
            id: variantElement.node.id,
            title: variantElement.node.title,
            price: variantElement.node.priceV2.amount,
            currencyCode: variantElement.node.priceV2.currencyCode,
            imageSrc: variantElement.node.image.originalSrc,
            imageAltText: variantElement.node.image.altText,
          };
          variants.push(normalizedProductVariant);
        });

        const normalizedProduct = {
          id: element.node.id,
          description: element.node.description !== '' ? element.node.description : null,
          title: element.node.title,
          type: element.node.productType,
          images,
          variants,
        };
        normalizedProducts[element.node.id] = normalizedProduct;
      });
      return successCallback(normalizedProducts);
    }, (responseError: any) => {
      return errorCallback(responseError);
    });
  }
}
