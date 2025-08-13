import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type User = {
    id: string
    name: string
}

const API_URL = 'http://localhost:3001'

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => '/users',
            providesTags: ["Users"]
        }),
        // Add more endpoints here as needed
        addUser: builder.mutation<User, string>({
            query: (name) => ({
                url: "/users",
                method: "POST",
                body: {name}
            }),
            invalidatesTags: ["Users"]
        }),
    }),
});

export const { useGetUsersQuery, useAddUserMutation } = usersApi;