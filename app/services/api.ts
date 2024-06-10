import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import  { cacheAdapterEnhancer } from 'axios-extensions';
import { USER_TOKEN } from "../constants/app";
import i18n from "i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "config";

const axiosInstance = axios.create({
    baseURL: config.app.api_entrypoint,
    headers: {
      'Cache-Control': 'no-cache',
      'Accept-Language': 'ar'
    },
    retryTimes: 3,
    timeout: 10000,
    // retry: 3,
    // retryDelay: 3000,
    // timeout: 7000
});

axiosInstance.interceptors.request.use(languageInterceptor);
axiosInstance.interceptors.request.use(authRequestInterceptor);

export const bearerAuthHeader = (token: string) => ({headers: { Authorization: `Bearer ${token}`}})

async function authRequestInterceptor(config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig<AxiosRequestConfig>> {
	const token = await AsyncStorage.getItem(USER_TOKEN);

	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}

	return config;
}

function languageInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<AxiosRequestConfig> {
	config.headers["Accept-Language"] = i18n.language;

	return config;
}

export default axiosInstance;
