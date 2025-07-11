import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
    GetKpisResponse,
    GetProductsResponse,
    GetTransactionsResponse,
} from "@/state/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;


  /*
  Approach	                                 Status	            Notes
Manual Redux (actions, reducers, thunks)	    Old	            Lots of boilerplate
RTK Query (createApi)	                     Modern	        Official, recommended for Redux
React Query, SWR	                         Modern	        Use when you do NOT need Redux state management

  */