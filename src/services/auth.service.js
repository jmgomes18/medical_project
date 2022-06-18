import api from "@/api/index.js";
import TokenService from "./token.service";

class AuthService {
    async login({ username, password }) {
        return api
            .post("/auth/signin", {
                username,
                password
            })
            .then((response) => {
                console.log('response 1', response)
                if (response.data.accessToken) {
                    TokenService.setUser(response.data);
                }

                return response.data;
            });
    }

    async logout() {
        TokenService.removeUser();
    }

    async register({ username, email, password }) {
        return api.post("/auth/signup", {
            username,
            email,
            password
        });
    }
}

export default new AuthService();