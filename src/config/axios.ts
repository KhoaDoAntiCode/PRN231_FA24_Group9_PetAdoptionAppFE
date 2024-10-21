import axios, { AxiosResponse } from "axios";

// Assuming you have a function to get the token
const token = localStorage.getItem('authToken'); 

const axiosClient = axios.create({
    baseURL: "https://localhost:5001",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    withCredentials: true,
  });

  // axiosClient.interceptors.request.use(
  //   async (config) => {
  //     const access_token = Cookies.get("accessToken");
  //     if (access_token) {
  //       config.headers.Authorization = `Bearer ${access_token}`;
  //     }
  //     return config;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   },
  // );
  
  // axiosClient.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   async (error) => {
  //     const originalRequest = error.config;
  //     if (error?.response?.status === 401) {
  //       originalRequest._retry = true;
  //       const refreshToken = Cookies.get("refreshToken");
  
  //       try {
  //         if (refreshToken) {
  //           // const res = await requestRefreshToken(refreshToken);
  //           if (res && res.status === 200) {
  //             const data = res.data["access-token"];
  //             Cookies.set("accessToken", data);
  //             axiosClient.defaults.headers.common["Authorization"] =
  //               `Bearer ${data}`;
  //           }
  //           return axiosClient(originalRequest);
  //         }
  //       } catch (refreshError) {
  //         console.error("check refresh error", refreshError);
  //       }
  //     }
  //     return Promise.reject(error);
  //   },
  // );
  
export default axiosClient;