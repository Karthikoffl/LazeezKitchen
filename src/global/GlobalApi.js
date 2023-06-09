import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "http://192.168.0.107:1337/api",
  headers: {
    "X-API-Key":
      "ae979b3bd8b6ef384bdf9f96498eb0ab43e13448e60ce8282a8adfc287257ddd95efdb2ce6635c5422888c5664fb50b2857b8f0a15496ea88a0deb9362d008d8257cdf0d1188c842fead4902a563dcd1b0365dc4f5a715db78c7099381e2236e55fd646450e9834b8e8c23879a26fd61c630fd77f4d797870652637e174355bd",
  },
});

const getSliders = () => api.get("/sliders?populate=*");
const getProducts = () => api.get("/products?populate=*");
const getCategories = () => api.get("/categories?populate=*");

export default { getSliders, getProducts, getCategories };
