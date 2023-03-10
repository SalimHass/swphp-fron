import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myProductsApi = createApi({
  // Set the baseUrl for every endpoint below
  reducerPath: "productsApi",
  //baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost/scandiPHP/' } ),
  baseQuery: fetchBaseQuery({
   baseUrl: "https://scandisalim.000webhostapp.com/",
  }),
  tagTypes: ["Request"],
  mode: "cors",
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: ``,
      }),
      providesTags: ["Request"],
      mode: "cors",
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: `create`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
        mode: "no-cors",
      }),
      invalidatesTags: ["Request"],
    }),
    deleteProducts: builder.mutation({
      query: (data) => ({
        url: `delete`,
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: data,
        mode: "no-cors",
      }),
      invalidatesTags: ["Request"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductsMutation,
} = myProductsApi;
