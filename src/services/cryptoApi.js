import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "31688f1d59mshd92eb1977e8cb10p199c91jsnebce3fbfba5e",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  //createApi je funkc koju dobijam iz reduxa
  reducerPath: "cryptoApi", //oznacava za sta je reducer
  baseQuery: fetchBaseQuery({ baseUrl }), // fatchBaseQuery takodje
  endpoints: (builder) => ({
    getCryptos: builder.query({
      //name of the endpoints
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
