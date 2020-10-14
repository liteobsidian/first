import * as axios from "axios";



const instance = axios.create({
    withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "36a96158-0426-44c6-87b9-eb6071d65fc7"
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
    },
    savePhoto (photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {'Content-Type':'multipart/form-data'}
        })
    },
    saveProfile (profile) {
        return instance.put('profile', profile)
    }
}

export const AuthAPI = {
    me () {
        return instance.get(`auth/me`)
            .then (response => {
                return response.data
            })
    },
    logIn (email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`,{email, password, rememberMe, captcha})
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

export const SecurityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
    }
}