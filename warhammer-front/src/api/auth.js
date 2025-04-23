import axios from "./axios";

export const login = async ({indentifier, password}) => {
    try {
        const response = await axios.post("/auth/local", {
            indentifier,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
}

export const register = async ({username, email, password}) => {
    try {
        const response = await axios.post("/auth/local/register", {
            username,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Register error:", error);
        throw error;
    }
}