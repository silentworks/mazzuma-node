import {
    IRequestPayment,
    IPaymentPayload,
    IRealPaymentPayload,
    ITransactionResponse
} from "./types";
import APIRequest from "./api";
import { AxiosResponse } from "axios";

export class RequestPayment implements IRequestPayment {
    private apiKey: string;
    private option: string;
    private network: string;
    protected apiRequest?: APIRequest;

    constructor(apiKey: string, option: string, network: string, request?: APIRequest) {
        this.option = option;
        this.apiKey = apiKey;
        this.network = network;
        this.apiRequest = request;
    }

    create(payload: IPaymentPayload) {
        let fullPayload = this.mapPayload(payload);
        return this.makeRequest(fullPayload);
    }

    mapPayload(payload: IPaymentPayload): IRealPaymentPayload {
        const { amount, to, from } = payload;
        return {
            price: amount,
            network: this.network,
            recipient_number: to,
            sender: from,
            option: this.option,
            apikey: this.apiKey
        }
    }

    protected makeRequest(payload: IRealPaymentPayload): Promise<AxiosResponse<ITransactionResponse>> {
        return this.apiRequest.paymentRequest(payload);
    }
}