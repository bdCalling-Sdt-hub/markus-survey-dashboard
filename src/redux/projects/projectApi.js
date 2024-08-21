import { baseApi } from "../api/baseApi";

export const projectApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProject: builder.mutation({
            query: (projectData) => {
                return {
                    url: `projects`,
                    method: "POST",
                    body: projectData,
                    headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    }
                }
            }
        }),

        getProjects: builder.query({
            query: () => {
                return {
                    url: `projects`,
                    method: "GET",
                    // headers: {
                    //     authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                    // }
                }
            }
        }),
    }),
})

export const { useCreateProjectMutation, useGetProjectsQuery } = projectApi;