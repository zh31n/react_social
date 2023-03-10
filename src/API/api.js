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
    getFollowId(id) {
        return instance.delete(`follow/${id}`,)
            .then(response => response.data)
    },
    getUnFollowId(id) {
        return instance.post(`follow/${id}`,)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get('auth/me',)
            .then(response => response.data)
    },
    Login(email, password, remeberMe = false) {
        return instance.post('auth/login', { email, password, remeberMe })
            .then(response => response.data)
    },
    Logout() {
        return instance.delete('auth/login')
            .then(response => response.data);
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}