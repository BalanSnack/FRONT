import type HTTPClient from "./HTTPClient";
import type { HTTPClientBuilder } from "./HTTPClient";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";

export interface RequestInterceptor {
  onFulfilled(
    value: InternalAxiosRequestConfig<any>,
  ): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>;
  onRejected(error: any): any;
}

export interface ResponseInterceptor {
  onFulfilled(value: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse<any>>;
  onRejected(error: any): any;
}

export default class AxiosClient implements HTTPClient {
  private axiosClient;

  constructor() {
    this.axiosClient = axios.create();
  }

  set baseUrl(url: string) {
    this.axiosClient.defaults.baseURL = url;
  }
  set requestInterceptors({ onFulfilled, onRejected }: RequestInterceptor) {
    this.axiosClient.interceptors.request.use(onFulfilled, onRejected);
  }
  set responseInterceptor({ onFulfilled, onRejected }: ResponseInterceptor) {
    this.axiosClient.interceptors.response.use(onFulfilled, onRejected);
  }

  async get(url: string, config?: Record<string, unknown>): Promise<any> {
    try {
      const response = await this.axiosClient.get(url, config);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async post(url: string, body: unknown, config?: Record<string, unknown>): Promise<any> {
    try {
      const response = await this.axiosClient.post(url, body, config);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async put(url: string, body: unknown, config?: Record<string, unknown>): Promise<any> {
    try {
      const response = await this.axiosClient.put(url, body, config);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async patch(url: string, body: unknown, config?: Record<string, unknown>): Promise<any> {
    try {
      const response = await this.axiosClient.patch(url, body, config);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete(url: string, config?: Record<string, unknown>): Promise<any> {
    try {
      const response = await this.axiosClient.delete(url, config);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export class AxiosClientBuilder implements HTTPClientBuilder {
  private readonly instance: AxiosClient;

  constructor() {
    this.instance = new AxiosClient();
  }

  setBaseUrl(url: string): AxiosClientBuilder {
    this.instance.baseUrl = url;
    return this;
  }

  setRequestInterceptor({ onFulfilled, onRejected }: RequestInterceptor): AxiosClientBuilder {
    this.instance.requestInterceptors = { onFulfilled, onRejected };
    return this;
  }

  setResponseInterceptor({ onFulfilled, onRejected }: ResponseInterceptor): AxiosClientBuilder {
    this.instance.responseInterceptor = { onFulfilled, onRejected };
    return this;
  }

  build(): HTTPClient {
    return this.instance;
  }
}
