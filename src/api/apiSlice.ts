import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.dating.com' }),
  endpoints: (builder) => ({
    login: builder.query({
      query: ({ email, password }) => ({
        url: '/identity',
        method: 'GET',
        headers: {
          Authorization: `Basic ${btoa(`${email}:${password}`)}`,
        },
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: '/identity',
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const { useLazyLoginQuery, useRegisterMutation } = apiSlice;
