import axiosInstance from "./index.js";
import TokenService from "@/services/token.service";

const setupInterceptor = (store) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = TokenService.getLocalAccessToken();
            console.log('token',token)
            if (token) {
                config.headers["Authorization"] = 'Bearer ' + token;
                console.log('cheguei no token');
            }
            console.log('config',config)
            return config;
        },
        (error) => {
            console.log('cheguei no erro');
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (res) => {
            console.log('response',res);
            return res;
        },
        async (err) => {
            const originalConfig = err.config;

            if (originalConfig.url !== "/auth/signin" && err.response) {
                // Access Token was expired
                if (err.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;

                    try {
                        const rs = await axiosInstance.post("/auth/refreshtoken", {
                            refreshToken: TokenService.getLocalRefreshToken(),
                        });

                        const { accessToken } = rs.data;

                        store.dispatch('auth/refreshToken', accessToken);
                        TokenService.updateLocalAccessToken(accessToken);

                        return axiosInstance(originalConfig);
                    } catch (_error) {
                        return Promise.reject(_error);
                    }
                }
            }

            return Promise.reject(err);
        }
    );
};

export default setupInterceptor;