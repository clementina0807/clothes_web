import Mock from "mockjs";
import products from './data/products.json';

Mock.mock('/mock/products', {
  code: 200,
  data: products,
});
