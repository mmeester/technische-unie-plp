import { rest } from 'msw';
import productData from './api/products.json';

export default [
  rest.get('api/products', (req, res, ctx) => {
    return res(
      ctx.json(productData)
    );
  })
]
