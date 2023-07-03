import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api/users', 
    withCredentials: true, 
  });

const register = async (userData) => {
    const response = await api.post('/', userData)

    if (response.data) {
        // localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const login = async (userData) => {
    const response = await api.post('/login', userData)

    if (response.data) {
        // localStorage.setItem('user', JSON.stringify(response.data))
        window.location.reload(true);
        console.log('logged in');
    }
    return response.data
}

const update = async (userData) => {
    try {
        const response = await api.put('/profile', userData)
        if (response.data) {
            console.log('updated')
            // localStorage.removeItem('user');
            // localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const logout = async() => {
    try {
        await api.post('/logout')
    } catch (error) {
        console.log(error)
    }
    localStorage.removeItem('user')
}

const getUser = async () => {
    try {
        const response = await api.get('/profile');
        const user = response.data;
        // console.log(user+'service')
        localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        console.log(error)
    }
}

const authService = {
    register,
    logout,
    login,
    update,
    getUser,
}

export default authService