import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '5f56e3081fmsh0a4c97b4bc488f4p1be157jsn841787745b0a',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryprtoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
})

export const { useGetCryptosQuery }: any = cryptoApi
