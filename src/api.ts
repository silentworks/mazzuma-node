import axios, { AxiosResponse, AxiosPromise } from "axios";
import { IRealPaymentPayload, ITransactionResponse } from "./types";

const BASE_URL = 'https://client.teamcyst.com/';

const serialize = (obj: any) =>
    Object.keys(obj)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
        .join("&");

export default class APIRequest {
    private request() {
        return axios.create({
            baseURL: BASE_URL
        });
    }

    async get<T = any>(url: string, options?: any): Promise<AxiosResponse<T>> {
        return this.request().get<T>(url, { ...options });
    }

    async post<T = any>(url: string, data?: {}, options?: any): Promise<AxiosResponse<T>> {
        return this.request().post<T>(url, data, { ...options });
    }

    async paymentRequest(payload: IRealPaymentPayload): Promise<AxiosResponse<ITransactionResponse>> {
        const url = `api_call.php`;
        return this.post<ITransactionResponse>(url, payload);
    }

    async transactionStatus(transactionId: string) {
        const data = {
            orderID: transactionId
        };
        const url = `checktransaction.php?${serialize(data)}`;
        return this.get<ITransactionResponse>(url);
    }
}