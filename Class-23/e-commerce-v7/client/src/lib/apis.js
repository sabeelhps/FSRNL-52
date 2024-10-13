import axios from "axios";

const BACKEND_BASE_URL = 'http://localhost:8080';

const instance = axios.create({
    headers: { Authorization : `Bearer ${window.localStorage.getItem('token')}` }
});

export async function fetchProducts() {
    const res = await instance.get(`${BACKEND_BASE_URL}/api/v1/products`);
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}

export async function fetchProductById(id) {
    const res = await instance.get(`${BACKEND_BASE_URL}/api/v1/products/${id}`);
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}

export async function loginUser(userCreds) {
    const res = await instance.post(`${BACKEND_BASE_URL}/api/v1/users/login`, userCreds);
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}

export async function fetchCurrentLoggedInUser() {
    const res = await instance.get(`${BACKEND_BASE_URL}/api/v1/users/profile`);
    if (res.status != 200) {
        throw new Error('cannot fetch the product the moment');
    }
    return res;
}