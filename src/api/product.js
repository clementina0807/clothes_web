import axios from 'axios'

export const productApi = {
  getProducts: async () => {
    const { data } = await axios.get("/mock/products");
    return data;
  },
};
