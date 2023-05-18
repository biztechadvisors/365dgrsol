import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const proApi = createApi({
  reducerPath: "proApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://biztekminds.com/" }),
  endpoints: (builder) => ({
    //* Get Categories
    getCategories: builder.query({
      query: () => `/mycoolapp/categories`,
    }),

    getAllProducts: builder.query({
      query: () => `/mycoolapp/Eproducts`,
    }),

    //* Get Products by Category
    getProducts: builder.query({
      query: (categories) => `/mycoolapp/EproductsCat/${categories}`,
    }),

    getProductById: builder.query({
      query: (id) => `/mycoolapp/EproductsId/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
} = proApi;
