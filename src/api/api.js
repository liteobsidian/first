import * as axios from "axios";



const instance = axios.create({
    withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "a1d5921e-4116-4b2a-a9fe-2debe055025e"
    }
});

export const UsersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    toFollow (id) {
        return instance.post(`follow/${id}`,{})
            .then(response => {
                return response.data
            })
    },
    toUnfollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const ProfileAPI = {
    getProfile (id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const AuthAPI = {
    me () {
        return instance.get(`auth/me`)
            .then (response => {
                return response.data
            })
    },
    logIn (email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe})
            .then (response => {
                return response.data
            })
    },
    logOut () {
        return instance.delete(`auth/login`)
            .then (response => {
                return response.data
            })
    }
}