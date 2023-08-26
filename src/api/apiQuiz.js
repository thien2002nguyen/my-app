import axiosClient from "./axiosClient"

const api = {
    getAll(params) {
        const url = '/api.php'
        return axiosClient.get(url, {
            params: params
        })
    },
    // getPost(id) {
    //     const url = `/posts/${id}`
    //     return axiosClient.get(url)
    // },
    // createPost(data) {
    //     const url = '/posts'
    //     return axiosClient.post(url, data)
    // },
    // updatePost(data) {
    //     const url = `/posts/${data.id}`
    //     return axiosClient.put(url, data)
    // },
    // updatePhhhost(data) {
    //     const url = `/posts/${data.id}`
    //     return axiosClient.put(url, {
    //         params: {
    //             id: data.id
    //         }
    //     })
    // },
    // deletePost(id) {
    //     const url = `/posts/${id}`
    //     return axiosClient.delete(url)
    // }
}

export default api