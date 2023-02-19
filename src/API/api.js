import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const UsersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    getUserId(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getAuth() {
        return instance.get('auth/me',)
            .then(response => response.data)
    },
    getFollowId(id) {
        return instance.delete(`follow/${id}`,)
            .then(response => response.data)
    },
    getUnFollowId(id) {
        return instance.post(`follow/${id}`,)
            .then(response => response.data)
    }

}